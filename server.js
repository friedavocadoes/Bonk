const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      esesh = require("express-session");

const app = express();
const path = require('path');
const port = 3000;
const User = require("./model/user");

mongoose.connect("mongodb://localhost:27017/finder");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(esesh({
	secret: "Rusty is a dog",
	resave: false,
	saveUninitialized: false
}));


// Serve static files from the current directory
app.use(express.static(__dirname));

//=====================
// ROUTES
//=====================

// Showing home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Showing register form
app.get("/register", function (req, res) {
	res.render("register");
});

//Showing login form
app.get("/login", function (req, res) {
	res.redirect("/");
});

// Handling user signup
app.post("/register", async (req, res) => {
	const user = await User.create({
	username: req.body.username,
	password: req.body.password
	});
	res.redirect('/');
	//return res.status(200).json(user);
});

// Handling user login
app.post("/login", async function(req, res){
	try {
		// check if the user exists
		const user = await User.findOne({ username: req.body.username });
		if (user) {
		//check if password matches
		const result = req.body.password === user.password;
		if (result) {
			res.render("secret");
		} else {
			res.status(400).json({ error: "password doesn't match" });
		}
		} else {
		res.status(400).json({ error: "User doesn't exist" });
		}
	} catch (error) {
		res.status(400).json({ error });
	}
});

//Handling user logout 
app.get("/logout", function (req, res) {
	req.logout(function(err) {
		if (err) { return next(err); }
		res.redirect('/');
	});
});

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect("/login");
}

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
