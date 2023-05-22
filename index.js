const express= require('express');
const path = require('path');
const port = 8000;

const app = express();
const db = require('./config/mongoose');

app.use(expressLayout);
app.set('view engine','ejs'); 
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded()); 
app.use('/',require('./routes'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


app.use(express.static('assets'));

app.get('/',function(req,res){


    return res.render('home', {
        title: "To Do List"
    });
});

app.get('/page1',function(req,res){


    return res.render('page1', {
        title: "Previous tasks"
    });
});


app.listen(port , function(err){
    if (err){
        console.log('Error in running the server' , err )
    }
    console.log('Yup! My express server is running on port', port); 
}); 