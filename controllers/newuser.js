module.exports = (req,res)=>{
	var username = "";
	var password = "";
	const data = req.flash('BDY')[0];
	if(typeof data != "undefined"){
		username = data.username;
		password = data.password;
	} 
	res.render('register',{
		errors:req.flash("VE"),
		//req.session.validationErrors
		username:username,
		password:password
	});
}