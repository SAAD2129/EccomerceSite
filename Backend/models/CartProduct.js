const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
