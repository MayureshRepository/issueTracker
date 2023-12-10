const mongoose = require('mongoose');

const newProjectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    //Adding Issue data as a Array 
    issues:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Issue'
    }]
},{
    timestamps:true
});


const NewProject = mongoose.model('NewProject',newProjectSchema);

module.exports = NewProject;