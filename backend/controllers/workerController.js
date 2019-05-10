const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {worker} = require('../models/worker.model');

// => localhost:3000/workers
router.get('/',(req,res)=>{
  worker.find((err, docs) =>{
    if(!err){res.send(docs); }
    else { console.log('Error in Retriving Worker : ' + JSON.stringify(err,undefined,2));}
  });
});

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  worker.findById(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retriving worker :' + JSON.stringify(err, undefined, 2)); }
  });
});


router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

      var wor= {
        worker_id : req.body.worker_id,
        worker_name: req.body.worker_name,
        worker_nic: req.body.worker_nic,
        worker_phone:req.body.worker_phone,
        worker_address: req.body.worker_address,
        job_type:req.body.job_type,

      };
  worker.findByIdAndUpdate(req.params.id, { $set: wor }, { new: true }, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in worker Update :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  worker.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Worker Delete :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.post('/',(req,res)=>{
	console.log(req.body.worker_password)
  var wor= new worker({
    worker_id : req.body.worker_id,
    worker_name: req.body.worker_name,
    worker_nic: req.body.worker_nic,
    worker_phone:req.body.worker_phone,
    worker_address: req.body.worker_address,
	job_type:req.body.job_type,
	worker_password:req.body.worker_password,
  });
  wor.save((err,doc)=>{
    if(!err){res.send(doc); }
    else { console.log('Error in Worker Save : ' + JSON.stringify(err,undefined,2));}
  });
});
module.exports = router;
