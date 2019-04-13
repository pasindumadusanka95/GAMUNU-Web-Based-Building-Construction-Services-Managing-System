require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var orderController = require('./controllers/orderController');
var app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

//start server
app.listen(3000, () => console.log(`Server started at port: 3000`));

app.use('/orders', orderController);
