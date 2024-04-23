const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema

var User = new Schema({
	nickname: {
		type: String
	},
	username: {
		type: String
	},
	password: {
		type: String
	}
})

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User)
