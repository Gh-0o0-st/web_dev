const mongoose = require("mongoose");
const schema = mongoose.Schema;
const blogPostSchema =  new schema({
	title:{
		type:String,
		//required:true
	},
	body:{
		type:String,
		//required:true
	},
	author:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'User',
		required:true
	},
	date:{
		type:Date,
		default:new Date()
	},
	ImagE:{
		type:String,
		//required:true
	}
});
const blogPost= mongoose.model('BlogPost',blogPostSchema);
module.exports = blogPost;