require('./models/db');
require('./config/config');
require('./config/passportConfig');

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

// const rtsIndex = require('./routes');

var orderController = require('./controllers/orderController');
var projectController= require('./controllers/projectController');
var resourceController= require('./controllers/resourceController');
var serviceController= require('./controllers/serviceController');
var workerController= require('./controllers/workerController');
var jobapplyController= require('./controllers/jobapplyController');
var loginController= require('./controllers/loginController');


// var userController = require('./controllers/userController');
// var registrationController = require('./controllers/registrationController');
var app = express();

//middleware
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));
app.use(passport.initialize());
// app.use('/', rtsIndex)
//start server
app.listen(process.env.PORT, () => console.log(`Server started at port: ${process.env.PORT}`));

app.use('/orders', orderController);
app.use('/projects', projectController);
app.use('/resources', resourceController);
app.use('/services', serviceController);
app.use('/workers', workerController);
// app.use('/workers', registrationController);
app.use('/jobapplys', jobapplyController);
// app.use('/login');
app.use('/login', loginController)
