const ConnectToDb = require('./db');
ConnectToDb();
var cors = require('cors');

const express = require('express');
const port = 5000;
const app = express();

app.use(express.json());
app.use(cors());

// Available Routes
app.use('/api/auth', require('./routes/authenticate'));
app.use('/api/product', require('./routes/ProductManage'));

app.listen(port, () => {
	console.log(`App Listening on Port http://localhost:${port}`);
});

