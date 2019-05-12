require('./models/db');
require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var orderController = require('./controllers/orderController');
var projectController= require('./controllers/projectController');
var resourceController= require('./controllers/resourceController');
var serviceController= require('./controllers/serviceController');
var workerController= require('./controllers/workerController');
var jobapplyController= require('./controllers/jobapplyController');
// var userController = require('./controllers/userController');
// var registrationController = require('./controllers/registrationController');
var app = express();

//middleware
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));

// app.use((err, req, res, next) => {
// 	if (err.name === 'Validationerror') {
// 		var valErrors = [];
// 		Object.keys(err.errors).forEach(key => {valErrors.push(err.errors[key].message)});
// 		res.status(422).send(valErrors);
// 	}
// })
//start server
app.listen(process.env.PORT, () => console.log(`Server started at port: ${process.env.PORT}`));

app.use('/orders', orderController);
app.use('/projects', projectController);
app.use('/resources', resourceController);
app.use('/services', serviceController);
app.use('/workers', workerController);
// app.use('/workers', registrationController);
app.use('/jobapplys', jobapplyController);
// app.use('/login', loginController);
