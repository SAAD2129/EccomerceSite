const MongoUri = 'mongodb://localhost/Ecommerce';
const mongoose = require('mongoose');

// ? Connecting the Data Base

const ConnectToDb = () => {
	mongoose.connect(MongoUri, () => {
		console.log('Connect to Database');
	});
};

module.exports = ConnectToDb;
