const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET__KEY = 'SAADTHEPROGRAMMER';
const express = require('express');
const router = express.Router();
const fetchUser = require('./fetchUser');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

//? ROUTE 1: REGISTER THE USER url:api/auth/register

router.post(
	'/register',
	[
		body('name', 'Enter a valid name').isLength({ min: 4 }),
		body('email', 'Enter a valid email').isEmail(),
		body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
	],
	async (req, res) => {
		// // @ Destructuring the data form body
		const Errs = validationResult(req.body);
		let success = false;
		if (!Errs.isEmpty()) {
			return res.status(400).json(success, { Errs: Errs.array() });
		}
		const { email, password, name } = req.body;

		try {
			// ..Finding User
			let userFind = await User.findOne({ email: email });
			if (userFind) return res.status(401).json({ success, msg: 'Try to fill correct Details' });

			// .. Salting the Pass
			let salt = await bcrypt.genSalt(10);
			let secured = await bcrypt.hash(req.body.password, salt);
			const newUser = new User({
				email: email,
				password: secured,
				name: name,
			});
			await newUser.save();
			success = true;
			res.status(200).json({ success, msg:"Account Created Successfully" });
		} catch (error) {
			console.log('🚀 ~ file: authenticates.js ~ line 19 ~ app.get ~ error', error);
		}
		// res.send('Hello From Register');
	},
);

//? ROUTE 2 : AUTHENTICATE THE USER BY CHECKING THE PASSWORD & EMAIL url api/auth/login
router.post('/login', async (req, res) => {
	const { email, password } = req.body;
	let success = false;
	try {
		let userFind = await User.findOne({ email });
		if (!userFind) return res.status(200).json({ success, msg: 'Create an Account' });

		// .. Checking the password
		let checkPassword = bcrypt.compare(userFind.password, password);
		const token = jwt.sign({ id: userFind._id }, SECRET__KEY);
		if (checkPassword) {
			success = true;
			return res.status(200).json({ success, authtoken: token,msg:"Login Successfully" });
		} else {
			return res.status(400).json({ success, msg: 'Wrong Credentials' });
		}
	} catch (error) {
		console.log('🚀 ~ file: authenticates.js ~ line 19 ~ app.get ~ error', error);
	}
});

router.get('/getUser', fetchUser, async (req, res) => {
	let success = false;
	try {
		let userId = req.user;
		const user = await User.findById(userId).select('-password');
		success = true;
		res.status(200).json({ success, user });
	} catch (error) {
		console.log('🚀 ~ file: authenticates.js ~ line 19 ~ app.get ~ error', error);
		res.status(500).send('Internal Server Error');
	}
});

module.exports = router;
