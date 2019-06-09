const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const passport = require('passport')
// var { worker } = require('../models/worker.model');
const mongoose =require('mongoose');
const worker = mongoose.model('worker')

router.get('/', (req, res) => {
	worker.find((err, docs) => {
		if (!err) { res.send(docs.worker_name); }
		else { console.log('Error in Retriving Worker : ' + JSON.stringify(err, undefined, 2)); }
	});
});

router.get('/:id', (req, res) => {
	if (!ObjectId.isValid(req.params.id))
		return res.status(400).send(`No record with given id : ${req.params.id}`);

	worker.findById(req.params.id, (err, doc) => {
		if (!err) { res.send(doc.worker_name); }
		else { console.log('Error in Retriving worker :' + JSON.stringify(err, undefined, 2)); }
	});
});
