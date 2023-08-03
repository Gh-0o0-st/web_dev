const express = require('express');
const app = express();

app.listen(8080,()=>{
	console.log('hi!');
})
const newPostController = require("./controllers/newpost.js");
const homeController = require("./controllers/home.js");
const getController = require("./controllers/getpost.js");
const storeController = require("./controllers/storepost.js");
const newUserController = require("./controllers/newuser.js");
const regController = require("./controllers/reg.js");
const loginController = require("./controllers/login.js");
const logoutController = require("./controllers/logout.js");
const lchkController = require("./controllers/lchk.js");

const ejs = require('ejs');
const mongoose= require('mongoose');
const bodyParser=require('body-parser');
const fileUpload = require('express-fileupload');
const validateMiddleWare = require('./middleware/validationmw.js');
const expressSession = require('express-session');
const Authmw = require('./middleware/authmw.js');
const redifAuthmw = require('./middleware/redifauthmw.js');
const flash = require('connect-flash');

app.set('view engine','ejs');

app.use(fileUpload());
app.use('/posts/store',validateMiddleWare);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(expressSession({secret:'keyboard cat'}));
app.use(flash());

mongoose.connect('mongodb://127.0.0.1:27017/my_db1',{useNewUrlParser:true});

global.loggedIn = null;
app.use('*',(req,res,next)=>{
	loggedIn=req.session.userId;
	next();
})

app.get('/',homeController);

app.get('/post/:id',getController);

app.get('/posts/new',Authmw,newPostController);

app.post('/posts/store',Authmw,storeController);

app.get('/auth/register',redifAuthmw,newUserController);

app.get('/auth/login',redifAuthmw,loginController);

app.get('/auth/logout',logoutController);

app.post('/users/register',regController);

app.post('/users/login',lchkController);

app.use((req,res)=>res.render('notfound'));

