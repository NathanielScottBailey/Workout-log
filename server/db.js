
var Sequelize = require('sequelize');

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
var User= seq.import('./models/user');
var Definition= seq.import('./models/definition.js')
var Log= seq.import('./models/log.js')
module.exports=seq