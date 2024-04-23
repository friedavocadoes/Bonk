// authRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const User = require("../model/user");

const router = express.Router();

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
                res.cookie('userId', user._id, { httpOnly: true });
                res.render("secret", { uname: `hello, ${user.nickname}` });
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
            res.redirect('/');
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Logout route
router.get('/logout', (req, res) => {
    // Clear the session cookie
    res.clearCookie('sessionId');
    res.redirect('/');
});

module.exports = router;

