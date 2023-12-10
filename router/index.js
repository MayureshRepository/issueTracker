const express = require('express');

const router = express.Router();


const home_Controller = require('../controller/home_controller');


router.get('/' , home_Controller.home);

router.use('/createProject' , require('./createProject'));





// router.use('users' ,)



//Exporting this in main index.js file
module.exports = router;

