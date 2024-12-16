const express=require('express')
const userController=require("../Controllers/userController")
const router=express.Router()
const taskController=require("../Controllers/taskController")
const jwtMiddleware=require("../Middleware/jwtMiddleware")


router.post('/signup',userController.register)

router.post('/login',userController.login)

router.post('/addtask',taskController.addtask)

module.exports = router