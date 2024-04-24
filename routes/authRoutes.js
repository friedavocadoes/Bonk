// authRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const User = require("../model/user");
const progress = require('../model/progress');

const router = express.Router();

// Function to return last question as per progress
async function checkProgress (uname) {
    const user = await progress.findOne({username: uname});
    if (!user) {
        return 0;
    }
    return user.qn;
}


// Showing login form
router.get("/login", function (req, res) {
    res.render("index", { errmsg: "You have been logged out" });
});

// Handling a login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user) {
            const result = await bcrypt.compare(req.body.password, user.password);
            if (result) {
                // Instead of storing in session, you can set a cookie for user identification
                res.cookie('userId', user.username, { httpOnly: true });
                
                // Checks last qn user was in and renders from progress
                var qn = await checkProgress(user.username);
                if (qn === 0) {
                    res.render("secret", { uname: `hello, ${user.nickname}` });
                } else if (qn == 1) {
                    res.render("qn1");
                } else if (qn == 2) {
                    res.render("qn2");
                } else if (qn == 3) {
                    res.render("qn3");
                } else if (qn == 4) {
                    res.render("qn4");
                } else if (qn == 5) {
                    res.render("qn5");
                } else {
                    res.redirect('/');
                }


            } else {
                res.render("index", { errmsg: "Wrong password" });
            }
        } else {
            res.render("index", { errmsg: "Username doesn't exist!" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Showing register form
router.get("/register", function (req, res) {
    res.render("register");
});

// Handling a registration
router.post("/register", async (req, res) => {
    try {
        const existingUser = await User.findOne({ username: req.body.username });
        if (existingUser) {
            res.render("registererr", { errmsg: "User already exists" });
            return;
        } else {
            const hashpwd = await bcrypt.hash(req.body.password, 12);
            const user = await User.create({
                nickname: req.body.nickname,
                username: req.body.username,
                password: hashpwd
            });
            await progress.create({
                username: req.body.username,
                qn: 0
            });
            res.redirect('/');
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Logout route
router.get('/logout', (req, res) => {
    // Clear the session cookie
    res.clearCookie('userId');
    res.redirect('/');
});

module.exports = router;