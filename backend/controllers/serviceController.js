const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {service} = require('../models/service.model');

// => localhost:3000/services
router.get('/',(req,res)=>{
  service.find((err, docs) =>{
    if(!err){res.send(docs); }
    else { console.log('Error in Retriving Service : ' + JSON.stringify(err,undefined,2));}
  });
});

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  service.findById(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retriving Service :' + JSON.stringify(err, undefined, 2)); }
  });
});


router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

      var ser= {
        service_id: req.body.service_id,
        service_name:req.body.service_name,
        service_type: req.body.service_type,
        price : req.body.price,
      };
  service.findByIdAndUpdate(req.params.id, { $set: ser }, { new: true }, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Service Update :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  service.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Service Delete :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.post('/',(req,res)=>{
  var ser= new service({
    service_id: req.body.service_id,
    service_name:req.body.service_name,
    service_type: req.body.service_type,
    price : req.body.price,

  });
  ser.save((err,doc)=>{
    if(!err){res.send(doc); }
    else { console.log('Error in Service Save : ' + JSON.stringify(err,undefined,2));}
  });
});
module.exports = router;
