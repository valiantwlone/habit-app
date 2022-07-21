const mongoose = require("mongoose")

const DailyTaskSchema= new mongoose.Schema({
    taskID:{
        type:String,
        required:true
    },
    taskBody:{
        type:String,
        required:true
    },
    taskTicked:{
        type:Boolean,
        require:true
    }

});

const DailyTask = mongoose.model("task", DailyTaskSchema,"task" )
module.exports = DailyTask;
 //comment