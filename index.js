
const express = require('express');

const path = require('path');
//It should be above express app fired 
const db = require('./config/mongoose');
const newProject = require('./model/newProject');

const app = express();

const port =8000;

const expressLayouts = require('express-ejs-layouts');


app.use(expressLayouts);

app.set('view engine' ,'ejs');
app.set('views' , './views');


// URI encoded
app.use(express.urlencoded({ extended: true }));


//Adding Assets files and style

app.use(express.static('./assets'));



// Serve static files from the 'assets' directory
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static('public')); // If you have a 'public' folder for other static files

//Adding Routes

app.use('/',require('./router/index'));


app.listen(port,function(err){
    if(err){
        console.log("There is an error");
        return;
    }

    console.log(`Server is Up and Running oN Port ${port}`);

})



