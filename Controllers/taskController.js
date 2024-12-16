 
const users = require('../Models/userModel')
const jwt = require('jsonwebtoken')
const task=require('../Models/taskModel')


exports.addtask = async (req, res) => {
    console.log("Inside Add task Function");
    const { taskName, taskid, asignedby, taskdescr,assigedto,assigneddate,assignedtodate} = req.body
    console.log(taskName, taskid, asignedby, taskdescr,assigedto,assigneddate,assignedtodate);
    try {
        const existingtask = await users.findOne({ taskName });
        if (existingtask) {
            res.status(406).json("Task Already exist!!!")
        } else {
            const newTask = new task({
                taskName,
                taskid,
                asignedby,
                taskdescr,
                assigedto,
                assigneddate,
                assignedtodate
            })
            await newTask.save();
            const token = jwt.sign({ taskid: newTask._id }, process.env.JWT_SECRET)
            res.status(200).json({token})
        }

    } catch (err) {
        res.status(401).json(err)

    }
}
// exports.login = async (req, res) => {
//     console.log("inside login function");
//     const { username, password } = req.body
//     console.log(username, password);
//     try {
//         const existingUser = await users.findOne({ username, password })
//         if (existingUser) {
//             const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET)
//             console.log(existingUser);
//             res.status(200).json({
//                 existingUser,
//                 token
//             })
//         } else {
//             res.status(404).json("Incorrect Username/Password")
//         }
//     }
//     catch (err) {
//         res.status(401).json(err)
//     }

// }