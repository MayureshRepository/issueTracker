const Project = require('../model/newProject');


module.exports.home =async function(req,res){

   try {
    let newArry=[];
    const projects = await Project.find({});

   

    console.log("Projects in home page is ",projects);
    res.render('home' , {title:'Home Page',projectdetails:projects});


   } catch (error) {
    console.error('Error in fetching Projects:', error);
   }

   

}