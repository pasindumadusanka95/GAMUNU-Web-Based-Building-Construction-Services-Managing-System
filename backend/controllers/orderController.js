const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {order} = require('../models/order.model');

// => localhost:3000/orders
router.get('/',(req,res)=>{
  order.find((err, docs) =>{
    if(!err){res.send(docs); }
    else { console.log('Error in Retriving Orders : ' + JSON.stringify(err,undefined,2));}
  });
});

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  order.findById(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retriving Orders :' + JSON.stringify(err, undefined, 2)); }
  });
});


router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

      var ord= {
        date : req.body.date,
        order_id: req.body.order_id,
        servic_id: req.body.service_id,
        cus_name:req.body.cus_name,
        cus_phone: req.body.cus_phone,
        cus_address:req.body.cus_address,
        cus_email: req.body.cus_email,
        payment_id:req.body.payment_id,
      };
  order.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Order Update :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  order.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Order Delete :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.post('/',(req,res)=>{
  var ord= new order({
    date : req.body.date,
    order_id: req.body.order_id,
    servic_id: req.body.service_id,
    cus_name:req.body.cus_name,
    cus_phone: req.body.cus_phone,
    cus_address:req.body.cus_address,
    cus_email: req.body.cus_email,
    payment_id:req.body.payment_id,
  });
  ord.save((err,doc)=>{
    if(!err){res.send(doc); }
    else { console.log('Error in Order Save : ' + JSON.stringify(err,undefined,2));}
  });
});
module.exports = router;
