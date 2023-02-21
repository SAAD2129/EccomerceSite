const express = require('express');
const router = express.Router();
const fetchUser = require('./fetchUser');
const Product = require('../models/cartProduct');

// ?Checking the User Adding the Product to the Cart
router.post('/addProduct', fetchUser, async (req, res) => {
	let success = false;
	const { name, price, quantity } = req.body;
	try {
		let userId = req.user;
		let product = await Product.findOne({ user: userId, name: name });
		if (product) {
			product.quantity += quantity;
			await product.save();
			success = true;
			return res.status(200).json({ success, msg: 'Product Updated Successfully' });
		}
		let item = new Product({
			user: userId,
			name: name,
			price: price,
			quantity: quantity,
		});
		await item.save();
		success = true;
		res.status(200).json({ success, msg: 'Added to Cart' });
	} catch (error) {
		console.log('🚀 ~ file: authenticates.js ~ line 19 ~ app.get ~ error', error);
		res.status(500).json({ success, msg: 'Internal Server Error' });
	}
});

// ? Checking the User Getting the Product from the Cart
router.get('/getProduct', fetchUser, async (req, res) => {
	let success = true;
	try {
		let userId = req.user;
		let products = await Product.find({ user: userId });
		console.log(products);
		success = true;
		res.status(200).json({ success, products, msg: 'Products Fetched Successfully' });
	} catch (error) {
		console.log('🚀 ~ file: authenticates.js ~ line 19 ~ app.get ~ error', error);
		res.status(500).json({success,msg:'Internal Server Error'});
	}
});

// ? Checking the User & Deleting the Product from the Cart
router.delete('/deleteItems', fetchUser, async (req, res) => {
	let success = true;
	try {
		let userId = req.user;
		let products = await Product.findOneAndDelete({ user: userId });
		// console.log(products);
		success = true;
		res.status(200).json({ success, msg: 'Products Deleted Successfully' });
	} catch (error) {
		console.log('🚀 ~ file: authenticates.js ~ line 19 ~ app.get ~ error', error);
		res.status(500).json({success,msg:'Internal Server Error'});
	}
});

module.exports = router;
