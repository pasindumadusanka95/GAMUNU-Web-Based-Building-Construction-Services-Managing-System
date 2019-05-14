const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const passport = require('passport')
// var { worker } = require('../models/worker.model');
const mongoose =require('mongoose');
const worker = mongoose.model('worker')
// var { worker } = require('../models/worker.model');

// router.post('/', (req, res) => {
// 	console.log("object")
// 	worker.findOne({ worker_nic: req.body.worker_nic },(err, doc) => {
// 		if (!err) { res.send(doc); }
// 		else { console.log('Error in Retriving : ' + JSON.stringify(err, undefined, 2)); }
// 	});
// });

// module.exports = router;

router.post('/', (req, res, next) => {
	// console.log("object")
	//call for passport authentication
	passport.authenticate('local', (err, worker, info) => {
		//error from passport authentication
		if (err) {
			return res.status(400).json(err);
		}
		//registered users
		else if (worker) {
			return res.status(200).json({"token" : worker.generateJwt()});
		}
		//unknown users and wrong passwords
		else{
			console.log("Err 3");
			return res.status(404).json(info);
		}
	})(req, res)
})



module.exports = router;