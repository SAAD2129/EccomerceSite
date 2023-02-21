const jwt = require('jsonwebtoken');

const fetchUser = (req, res, next) => {
	let token = req.header('auth-token');
    console.log(token);
	if (!token) {
		res.status(401).send('Please Authenticate using a valid token');
	}

	try {
		const data = jwt.verify(token, 'SAADTHEPROGRAMMER');
        console.log(data.id);
		req.user = data.id;
		next();
	} catch (error) {
		res.status(401).send('Please Authenticate using a valid token');
	}
};


module.exports = fetchUser;
