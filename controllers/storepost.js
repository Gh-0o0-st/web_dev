const blogPost=require("../models/blogpost.js");
const path = require('path');
module.exports = (req,res)=>{
	let image = req.files.egami;
	image.mv(path.resolve(__dirname,'..','public/assets/img',image.name),async (error)=>{
		await blogPost.create({...req.body,ImagE:'/assets/img/'+ image.name,author:req.session.userId});
		res.redirect('/');
	})
}