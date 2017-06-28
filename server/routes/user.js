var router = require('express').Router();
var seqeulize= require('../db.js');
var User = seqeulize.import('../models/user');
var bcrypt= require('bcryptjs');
var jwt = require('jsonwebtoken');


router.post('/', function(req,res){
	var username = req.body.user.username;
	var pass = req.body.user.password;
	User.create({
		username: username,
		passwordhash: bcrypt.hashSync(pass, 10)
		//we are encrypting the password, pass refers the above crap and 10 is the how many process we go through to do it
		}).then(
			function createSuccess(user){
				var token= jwt.sign({id:user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
				res.json({
					user: user,
					message: 'create',
					sessionToken: token
				})
			},
			function createError(err){
				res.send(500, err.message)
			}
		);
	});

module.exports = router;