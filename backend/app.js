require('./models/db');
require('./config/config');
require('./config/passportConfig');

const socket = require('socket.io');
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
var userFetchController = require('./controllers/userFetchController');
var requestLeaveController= require('./controllers/requestLeaveController');

const jwtHelper = require('./config/jwtHelper');
// var registrationController = require('./controllers/registrationController');
var app = express();
const server = require('http').createServer(app);

//middleware
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));
app.use(passport.initialize());
// app.use('/', rtsIndex)
//start server
server.listen(process.env.PORT, () => console.log(`Server started at port: ${process.env.PORT}`));

//For Sockets
const io = socket(server);
app.set('io', io);

app.use('/orders', orderController);
app.use('/projects', projectController);
app.use('/resources', resourceController);
app.use('/services', serviceController);
app.use('/workers', workerController);
app.use('/worker', workerController);

// app.use('/workers', registrationController);
app.use('/jobapplys', jobapplyController);
// app.use('/login');
app.use('/worker/leave', requestLeaveController);
app.use('/worker/viewProjects', projectController);

app.use('/login', loginController)
app.use('/userProfile', jwtHelper.verifyJwtToken, userFetchController )
