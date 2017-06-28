var express= require('express');
var app= express();
var bodyParser= require('body-parser');
var seq= require('./db.js')
var User= seq.import('./models/user');
require('dotenv').config()

User.sync()
app.use(bodyParser.json());

app.use(require('./middleware/header'));
app.use(require('./middleware/validate-session'))
// creating a user
app.use('/api/user', require('./routes/user'));
//logging in a user
app.use('/api/login', require('./routes/session'));



app.use('/api/test', function(req,res){
	res.send("Hello World");
});



app.listen(3000,function(){
	console.log("app is listening on 3000")
})


//Challenge, go to postman , create a new user, then login with that user