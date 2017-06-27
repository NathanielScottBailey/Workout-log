var express= require('express');
var app= express();
app.use(require('./middleware/header'));
//name of the data base, database type, and since its postgres the password I use for it
var bodyParser= require('body-parser');
var seq= require('./db.js')
var User= seq.import('./models/user');


User.sync()
app.use(bodyParser.json())

app.use('/api/user', require('./routes/user'))
app.use('/api/test', function(req,res){
	res.send("Hello World");
});



app.listen(3000,function(){
	console.log("app is listening on 3000")
})