module.exports= function(req,res,next){
	res.header('access-control-allow-origin', '*');
	//^ anyone can use this api
	res.header('access-control-allow-methods', 'GET,POST,PUT,DELETE')
	//^ This allows the following methods to be used
	res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
	//^ This is stuff you have to meet to post and do all that bull
	next();
};