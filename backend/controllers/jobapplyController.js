const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

// var {jobapply} = require('../models/jobapply.model');
const mongoose =require('mongoose');
const jobapply = mongoose.model('jobapply')


var count = 0;
// => localhost:3000/jobapplys
router.get('/',(req,res)=>{
  jobapply.find((err, docs) =>{
    if(!err){res.send(docs); }
    else { console.log('Error in Retriving Worker : ' + JSON.stringify(err,undefined,2));}
  });
});

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  jobapply.findById(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retriving jobapply :' + JSON.stringify(err, undefined, 2)); }
  });
});


router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

      var jobapp= {
        worker_id : req.body.worker_id,
        worker_name: req.body.worker_name,
        worker_nic: req.body.worker_nic,
        worker_phone:req.body.worker_phone,
        worker_address: req.body.worker_address,
        job_type:req.body.job_type,

      };
  jobapply.findByIdAndUpdate(req.params.id, { $set: jobapp }, { new: true }, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in JOb apply Update :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

      jobapply.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in job apply Delete :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.post('/',(req,res, next)=>{
	let count = 0
	jobapply.find((err, docs) =>{
		if(!err){
			var c = Object.keys(docs).length;
			console.log(c);
			
			// var jobapp= new jobapply({
			// 	worker_id : c + 1,
			// 	worker_name: req.body.worker_name,
			// 	worker_nic: req.body.worker_nic,
			// 	worker_phone:req.body.worker_phone,
			// 	worker_address: req.body.worker_address,
			// 	job_type:req.body.job_type,
			// 	worker_password:req.body.worker_password,
			// });

			var job = new jobapply();
			job.worker_id = c + 1;
			job.worker_name= req.body.worker_name;
			job.worker_nic= req.body.worker_nic;
			job.worker_phone=req.body.worker_phone;
			job.worker_address= req.body.worker_address;
			job.job_type=req.body.job_type;
			job.worker_password=req.body.worker_password;

			job.save((err,doc)=>{
				console.log(doc);
				if(!err){
					const io = req.app.get('io');/////////Event Emitor////////////
					io.emit("newJobApplicaitonEvent");

					res.send(doc);
				 }
				else { 
					// console.log('Error in Job apply Save : ' + JSON.stringify(err,undefined,2));
					if (err.code == 11000) {
						res.status(422).send(['Duplicate nic address found']);
						// console.log("Dup nic")
					} else {
						return next(err)
					}
				}
			  });
		}
		else { console.log('Error in Retriving Worker : ' + JSON.stringify(err,undefined,2));}
	});
	
	console.log("Count "+count);
  
});


module.exports = router;
