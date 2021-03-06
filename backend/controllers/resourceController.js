const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {resource} = require('../models/resource.model');

// => localhost:3000/resources
router.get('/',(req,res)=>{
  resource.find((err, docs) =>{
    if(!err){res.send(docs); }
    else { console.log('Error in Retriving Resource : ' + JSON.stringify(err,undefined,2));}
  });
});

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  resource.findById(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retriving Resource :' + JSON.stringify(err, undefined, 2)); }
  });
});


router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

      var reso= {
        resource_id: req.body.resource_id,
        resource_type: req.body. resource_type,
        resource_name:req.body. resource_name,
        resource_owner: req.body. resource_owner,
        resource_count:req.body. resource_count,
        available: req.body.available,
      };
  resource.findByIdAndUpdate(req.params.id, { $set: reso }, { new: true }, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Order Update :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  resource.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Resource Delete :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.post('/',(req,res)=>{
  var reso= new resource({
    resource_id: req.body.resource_id,
    resource_type: req.body. resource_type,
    resource_name:req.body. resource_name,
    resource_owner: req.body. resource_owner,
    resource_count:req.body. resource_count,
    available: req.body.available,
  });
  reso.save((err,doc)=>{
    if(!err){res.send(doc); }
    else { console.log('Error in Resource Save : ' + JSON.stringify(err,undefined,2));}
  });
});
module.exports = router;
