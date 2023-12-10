const mongoose = require('mongoose');


const newIssue = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    labels:{
        type:String
    },
    author:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const Issue = mongoose.model('Issue' , newIssue);

module.exports=Issue;