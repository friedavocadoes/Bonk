const mongoose = require('mongoose')
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

module.exports = mongoose.model('User', User)
