// playRoutes.js
const express = require('express');
const progress = require('../model/progress');  
const router = express.Router();

// Setting up routes for each question and updating progress

// First
router.get('/qn1', async (req, res) => {
    if (req.cookies.userId) {
        await progress.findOneAndUpdate(
            { username: req.cookies.userId },
            { $set: { qn:1 } }
        );
        res.render('qn1');
    } else {
        res.redirect('/login');
    }
});

// Second
router.get('/qn2', async (req, res) => {
    if (req.cookies.userId) {
        await progress.findOneAndUpdate(
            { username: req.cookies.userId },
            { $set: { qn:2 } }
        );
        res.render('qn2');
    } else {
        res.redirect('/login');
    }
});

// Third
router.get('/qn3', async (req, res) => {
    if (req.cookies.userId) {
        await progress.findOneAndUpdate(
            { username: req.cookies.userId },
            { $set: { qn:3 } }
        );
        res.render('qn3');
    } else {
        res.redirect('/login');
    }
});

// Fourth
router.get('/qn4', async (req, res) => {
    if (req.cookies.userId) {
        await progress.findOneAndUpdate(
            { username: req.cookies.userId },
            { $set: { qn:4 } }
        );
        res.render('qn4');
    } else {
        res.redirect('/login');
    }
});

// Fifth
router.get('/qn5', async (req, res) => {
    if (req.cookies.userId) {
        await progress.findOneAndUpdate(
            { username: req.cookies.userId },
            { $set: { qn:5 } }
        );
        res.render('qn5');
    } else {
        res.redirect('/login');
    }
});


module.exports = router;
