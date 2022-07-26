const mongoose = require("mongoose")

const DailyTaskSchema= new mongoose.Schema({

    username:{
        type:String,
        required: true
    },
    body:{
        type:String,
        required:true
    },
    ticked:{
        type:Boolean,
        require:true
    }
},{
    timestamps:true
});

const DailyTask = mongoose.model("task", DailyTaskSchema,"task" )
module.exports = DailyTask;
