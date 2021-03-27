const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()
let router = require('./routes/routes');

// app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('Please use /api/books or /api/genres');
});

app.use('/api', router);

app.listen(3000);
// console.log('Running on port 3000...');


module.exports = app;