const Project = require('../model/newProject');
const Issue = require('../model/newIssue');


module.exports.create = async function(req,res){
    
    return res.render('create_project',{title:"Create Project"});
}

module.exports.createNewProject = async function(req,res){
    try {

        const newProject = await Project.create({
            name:req.body.name,
            description:req.body.description,
            author:req.body.author

        });

        res.redirect('/');
        
    } catch (error) {
        
    }
}


module.exports.createIssue= async function(req,res){
    try {
        let project = await Project.findById(req.params.id);

        console.log("create issue method ",project);


        return res.render('create_issue',{title:'Create Issue',projectt :project});



        
    } catch (error) {
        console.error("Error creating new issue", error);
    }
}

// module.exports.newIssue= async function(req,res){
   
//     try {
//         let project = await Project.findById(req.params.id);
//         if(project){
//             let issuepost = await Issue.create({
//                 title:req.body.title,
//                 labels:req.body.labels,
//                 description:req.body.description,
//                 author:req.body.author
    
//             });

//             project.issues.push(issuepost);
//             console.log("Issue post ID",issuepost.id);
//             await project.save();
//             console.log("Project after pushed",project);
//         }

         
       
      
//             return res.redirect('/');


//       // return res.redirect('/createProject/detailsPage/issuepost._id');


        
//     } catch (error) {
//         console.log("there is an error creating new issue ",error);
//     }

// }

module.exports.newIssue = async function (req, res) {
    let issuepost;

    try {
        let project = await Project.findById(req.params.id);
        if (project) {
            issuepost = await Issue.create({
                title: req.body.title,
                labels: req.body.labels,
                description: req.body.description,
                author: req.body.author
            });

            project.issues.push(issuepost);

            console.log("Issue post ID", issuepost.id);

            await project.save();
            console.log("Project after pushed", project);

            // Redirect only if project and issuepost are defined
            return res.redirect(`/createProject/detailsPage/${req.params.id}`);
        } else {
            console.log("Project not found");
            return res.status(404).send("Project not found");
        }
    } catch (error) {
        console.error("Error creating new issue", error);
        return res.status(500).send("Internal Server Error");
    }
};


module.exports.detailsPage= async function(req,res){

    try {
        let detail = await Project.findById(req.params.id).populate({
            path:"issues",
        });

        console.log('details' ,detail);

        return res.render('details_page',{title:'Details Page',detailsDisplay:detail});
}


     catch (error) {
        console.log("there is an error",error);
    }
}








    