const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {project} = require('../models/project.model');

// => localhost:3000/projects
router.get('/',(req,res)=>{
  project.find((err, docs) =>{
    if(!err){res.send(docs); }
    else { console.log('Error in Retriving Projects : ' + JSON.stringify(err,undefined,2));}
  });
});

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  project.findById(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retriving Projects :' + JSON.stringify(err, undefined, 2)); }
  });
});


router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

      var pro= {
        project_id: req.body.project_id,
        order_id: req.body.order_id,
        project_name: req.body.project_name,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        project_loc: req.body.project_loc,
        cus_name:req.body.cus_name,
        project_status: req.body.project_status,
        project_cost:req.body.project_cost,
        worker_count: req.body.worker_count,

      };
  project.findByIdAndUpdate(req.params.id, { $set: pro }, { new: true }, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Project Update :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  project.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Project Delete :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.post('/',(req,res)=>{

    var pro= new project({
      project_id: req.body.project_id,
      order_id: req.body.order_id,
      project_name: req.body.project_name,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      project_loc: req.body.project_loc,
      cus_name:req.body.cus_name,
      project_status: req.body.project_status,
      project_cost:req.body.project_cost,
      worker_count: req.body.worker_count,
  });
  pro.save((err,doc)=>{
    if(!err){res.send(doc); }
    else { console.log('Error in Project Save : ' + JSON.stringify(err,undefined,2));}
  });
});
module.exports = router;
