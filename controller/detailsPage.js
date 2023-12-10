const Project = require('../model/newProject');
const Issues = require('../model/newIssue');



module.exports.issueDestroy = async function(req,res){
    try {

        let destroyBug = await  Issues.findByIdAndDelete(req.params.id);

        await Project.findByIdAndDelete(req.params.id);

        return res.redirect('back');
       

        
    } catch (error) {
        console.log(`There is an error ing the issue Destroy method ${error}`);
    }
      
}