require('dotenv').config() 
const express=require('express')
const cors=require('cors')
const router=require('./Routes/router')
require("./DB/connection")

const tmServer=express() 


tmServer.use(cors()) 
tmServer.use(express.json())
tmServer.use(router) 


const PORT=3000 || process.env.PORT 

tmServer.listen(PORT,()=>{
    console.log(`Project Fair server started at PORT: http://localhost:${PORT}`);
})

tmServer.get("/",(req,res)=>{
    res.status(200).send(`<h1 style="color:red">Task Management Server Started and Waiting for client request!!!</h1>`)
})

 