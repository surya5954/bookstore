const mongoose = require('mongoose');

// Book Schema
const bookSchema = mongoose.Schema({
	author: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	isbn: {
		type: String,
		required: true
	},
	release_date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Book', bookSchema);

