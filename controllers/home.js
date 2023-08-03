const blogPost=require("../models/blogpost.js");
module.exports = async (req,res)=>{
	const blogposts = await blogPost.find({}).populate('author');	
	//console.log(req.session);
	res.render('index',{
		blogposts
	});
}