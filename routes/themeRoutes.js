const express = require('express');  
const fs = require('fs');
const router = express.Router();

var theme;

router.get('/tFetch', async (req, res) => {
    theme = fs.readFileSync('routes/thdata.txt', 'utf-8');
    const werp = {theem: theme};
    res.json(werp);
});

router.post('/tChange', async (req, res) => {
    const theme = req.body.theem;
    fs.writeFile('routes/thdata.txt', theme, (err) => {
        if (err) throw err;
    })
});

module.exports = router;