var router= require('express').Router();
var jwt= require('jsonwebtoken');
var sequelize= require('../db.js');
var User= sequelize.import('../models/user.js');
var Definition= sequelize.import('../models/definition');

router.post("/", function(req,res){
	var description=req.body.definition.desc;
	var logType= req.body.definition.type;
	var owner= req.user.id;

	Definition

		.create({
			description: description,
			logType: logType,
			owner: owner
			//this shapes how the data will look in postgres
		}).then(
//when I create this crap send back the junk that was created
			function createSuccess(definition){
				res.json({
					definition: definition
				})
			},
			function createError(err){
				res.send(400, err.message)
			}

		)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
})


router.get('/', function(req,res){
	var userid= req.user.id;

	Definition

		.findAll({where: {owner: userid}}).then(

			function findAllSuccess(data){
				res.json(data);
				},
				function findAllError(err){
					res.send("hello")
				}
			


			)
})


module.exports= router;