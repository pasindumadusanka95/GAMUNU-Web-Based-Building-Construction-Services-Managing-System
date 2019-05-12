const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { worker } = require('../models/worker.model');

router.post('/', (req, res) => {
	console.log("object")
	worker.findOne({ worker_nic: req.body.worker_nic },(err, doc) => {
		if (!err) { res.send(doc); }
		else { console.log('Error in Retriving Worker : ' + JSON.stringify(err, undefined, 2)); }
	});
});

module.exports = router;