const express = require ("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const DailyTaskModel= require("../server/models/DailyTask")
require('dotenv/config')
const PORT=process.env.PORT || 3001
const DB_URI = process.env.DB_URI


app.use(express.json())
app.use(cors())
app.use(express.json())

mongoose.connect(DB_URI,
{
    useNewUrlParser : true,
}).then (()=>{
    console.log("--------DB connected--------");
})
.catch((err)=> {
    console.log(err)
});


app.get('/addNewTask',async (req,res)=>{
    const task = new DailyTaskModel({taskID:"1",taskBody:"This is task 1",taskTicked:false})

    try{
        await task.save((err, taskResults)=>{
            console.log("New user created!")
        });
    }catch(err){
        console.log(err)
        res.end('User not added')
    }
})

app.listen(PORT, ()=>{
    console.log(`--------Server running on port ${PORT}--------`);
})