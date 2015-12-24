exports.authorize=function(req,res,next){
	if(!req.session.user_id){
		res.sendStatus(401)
	}else{
		next();
	}
};
