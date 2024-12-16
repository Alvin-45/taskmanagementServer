const mongoose= require("mongoose");

mongoose.connect(process.env.CONNECTIONSTRING).then(    //result promise so then is used

    result=>{
        console.log("MongoDB atlas connected with tmServer");
    }
).catch(err=>{
    console.log("Connection Failed!!!");
    console.log(err);
})