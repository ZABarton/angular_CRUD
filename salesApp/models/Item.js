var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
	name: String,
	description: String,
	sold: Boolean,
	price: Number
});

module.exports = mongoose.model('Item', ItemSchema);