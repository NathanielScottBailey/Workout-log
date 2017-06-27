var express= require('express');
var app= express();
var Sequelize = require('sequelize');
app.use(require('./middleware/header'));
//name of the data base, database type, and since its postgres the password I use for it
var bodyParser= require('body-parser');


var seq = new Sequelize('workoutlog', 'postgres', 'Rudy18nat',{
	host:'localhost',
	dialect: 'postgres'
});



seq.authenticate().then(
	function(){
		console.log("You're connected to the pg database")
	},
		function(err){
			console.log(err)
})


var User= seq.define('user',{

	username: Sequelize.STRING,
	passwordhash: Sequelize.STRING
})

User.sync()
app.use(bodyParser.json())

app.post('/api/user', function(req,res){
	var username= req.body.user.username
	var pass= req.body.user.password



User.create({
	username: username,
	passwordhash: ""
	}).then(
		function createSuccess(user){
			res.json({
				user: user,
				message: 'create'
			})
		},
		function createError(err){
			res.send(500, err.message)
		}

		)
})

app.use('/api/test', function(req,res){
	res.send("Hello World");
});



app.listen(3000,function(){
	console.log("app is listening on 3000")
})