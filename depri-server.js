//import all dependencies
const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      session = require("express-session"),
	  passport = require('passport'),
	  LocalStrategy = require('passport-local').Strategy;

const app = express();
const path = require('path');
const port = 3000;
const User = require("./model/user");
const { register } = require('module');


//set ejs as view
app.set("view engine", "ejs");

//use body parser for easy return of elements
app.use(bodyParser.urlencoded({ extended: true }));

//express session
app.use(session({
	secret: "Rusty is a dog", //unique string
	resave: false,
	saveUninitialized: false
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Passport local strategy
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//connect to mongodb server (edit if necessary)
mongoose.connect("mongodb://localhost:27017/finder"); //this is the default local server link-auto creates finder db


// Serve static files from the current directory
app.use(express.static(__dirname));

//=====================
// ROUTES
//=====================

//route for login and register
const authRoutes = require('./routes/authRoutes');
app.use('/', authRoutes);

//routes for the game
const playRoutes = require('./routes/playRoutes');
app.use('/', playRoutes);

// Showing home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


//Handling user logout 
app.get("/logout", function (req, res) {
	req.logout(function(err) {
		if (err) { return next(err); }
		res.redirect('/');
	});
});


app.listen(port, () => {
  console.log(`Running on port http://localhost:${port}`);
});
