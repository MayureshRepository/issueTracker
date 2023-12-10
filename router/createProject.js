const express = require('express');

const router = express.Router();

const createProjectController = require('../controller/createProject');
const details_controller = require('../controller/detailsPage');


router.get('/create',createProjectController.create);

router.post('/createNewProject' , createProjectController.createNewProject);

router.get('/detailsPage/:id' , createProjectController.detailsPage);

router.get('/create_issue/:id',createProjectController.createIssue);

router.post('/newIssue/:id' ,createProjectController.newIssue);

router.get('/destroy_Bug/:id' ,details_controller.issueDestroy);






module.exports = router;