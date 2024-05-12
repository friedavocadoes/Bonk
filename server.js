// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const User = require('./model/user');

const authRoutes = require('./routes/authRoutes');
const playRoutes = require('./routes/playRoutes');
const themeRoutes = require('./routes/themeRoutes');

// Initialize Express app
const app = express();
const port = 3001;

// Set view engine
app.set('view engine', 'ejs');

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser()); // Use cookie-parser middleware
app.use(express.json());
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/finder');

// Serve static files
app.use(express.static(path.join(__dirname)));

// Routes setup
app.use('/', authRoutes);
app.use('/', playRoutes);
app.use('/', themeRoutes);

// Home page route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
