const Project = require('../model/newProject');


module.exports.home =async function(req,res){

   try {
    const projects = await Project.find({});

    console.log("Projects in home page is ",projects);
    res.render('home' , {title:'Home Page',projectdetails:projects});

   } catch (error) {
    console.error('Error in fetching Projects:', error);
   }

   

}

module.exports.search = async function(req, res) {
   const searchTerm = req.query.q;
   console.log("searchTerm",searchTerm);

   try {
       if (searchTerm) {
           // Use a regex to perform a case-insensitive search
           const projects = await Project.find({ name: { $regex: new RegExp(searchTerm, 'i') } });

           return res.render('search', { title: 'Search Results', searcheddata: projects, searchTerm: searchTerm });
       } 
   } catch (error) {
       console.error('Error searching projects:', error);
       return res.status(500).send('Internal Server Error');
   }
};