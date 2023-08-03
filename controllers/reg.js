const User=require("../models/user.js");
module.exports = (req,res)=>{
	User.create(req.body,(error)=>{
		if(error){
			const validationErrors=Object.keys(error.errors).map((key)=>{
				return error.errors[key].message;
			});
			req.flash('VE',validationErrors);
			req.flash('BDY',req.body);
			//req.session.validationErrors=validationErrors;
			return res.redirect('/auth/register');
		}
		res.redirect('/');
	});
}
