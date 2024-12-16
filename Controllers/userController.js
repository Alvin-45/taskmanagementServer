
const users = require('../Models/userModel')
const jwt = require('jsonwebtoken')
const task=require('../Models/taskModel')


exports.register = async (req, res) => {
    console.log("Inside Register Function");
    const { firstName, email, username, password} = req.body
    console.log(firstName, email, username, password);
    try {
        const existingUser = await users.findOne({ username });
        if (existingUser) {
            res.status(406).json("User Already exist!!!")
        } else {
            const newUser = new users({
                firstName,
                email,
                username,
                password
            })
            await newUser.save();
            const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET)
            res.status(200).json({token})
        }

    } catch (err) {
        res.status(401).json(err)

    }
}
exports.login = async (req, res) => {
    console.log("inside login function");
    const { username, password } = req.body
    console.log(username, password);
    try {
        const existingUser = await users.findOne({ username, password })
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET)
            console.log(existingUser);
            res.status(200).json({
                existingUser,
                token
            })
        } else {
            res.status(404).json("Incorrect Username/Password")
        }
    }
    catch (err) {
        res.status(401).json(err)
    }

}