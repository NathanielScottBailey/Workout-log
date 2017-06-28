var router= require('express').Router();
var bcrypt= require('bcryptjs');
var jwt= require('jsonwebtoken');
var sequelize= require('../db.js');
var User= sequelize.import('../models/user.js');

router.post('/', function(req,res){
	//in a then statement the first function is true and the second is false
	User.findOne({where:{username: req.body.user.username}}).then(
		function(user){
			if(user){
				bcrypt.compare(req.body.user.password, user.passwordhash, function(err,matches){ 
					//in this function ^^ the first one is the error and the second one is right
					if(matches){
						var token= jwt.sign({id: user.id}, "i_am_secret", {expiresIn: 60*60*24});
							res.json({
								user:user,
								message: "logged in successfully",
								sessionToken: token
							})
					} else{
						res.status(500).send({error: "failed to authenticate"})
					}

				})
			}
		}, function(err){
			res.json(err);
		}

		)
})

module.exports= router;