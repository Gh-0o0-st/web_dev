const blogPost=require("../models/blogpost.js");
module.exports = async (req,res)=>{
	const blogpost = await blogPost.findById(req.params.id).populate('author');
	res.render("post",{
		blogpost
	});
}