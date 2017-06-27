
module.exports= function(seq, Datatypes){

		var User= seq.define('user',{
			username: Datatypes.STRING,
			passwordhash: Datatypes.STRING
})
		return User;
}



