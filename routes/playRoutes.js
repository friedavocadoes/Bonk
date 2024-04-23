// playRoutes.js
const express = require('express');
const router = express.Router();

// Secret page route (protected)
router.get('/secret', (req, res) => {
    // Check if userId cookie exists
    if (req.cookies.userId) {
        
        const user = { nickname: 'John Doe' }; // Sample user data
        res.render('secret', { uname: `Hello, ${user.nickname}` });
    } else {
        res.redirect('/login');
    }
});

// Question 1 page route (protected)
router.get('/qn1', (req, res) => {
    // Check if userId cookie exists
    if (req.cookies.userId) {
        res.render('qn1'); // Render the question 1 page if user is authenticated
    } else {
        res.redirect('/login');
    }
});

module.exports = router;
