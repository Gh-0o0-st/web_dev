const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');

const userschema = new schema({
	username:{
		type:String,
		required:[true,'kottu bey username'],
		unique:true
	},
	password:{
		type:String,
		required:[true,'pagulthadi neeku!']
	}
})
userschema.plugin(uniqueValidator);
userschema.pre('save',function(next){
	const user=this;
	bcrypt.hash(user.password,10,(error,hash)=>{
		user.password=hash;
		next();
	})
})
const user = mongoose.model('User',userschema);
module.exports=user;