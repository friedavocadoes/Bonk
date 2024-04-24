const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userProgress = new Schema({
    username: {
        type: String,
        unique: true
    },
    qn: {
        type: Number
    }
});

module.exports = mongoose.model('progress', userProgress);