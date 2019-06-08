const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {order} = require('../models/order.model');
var {transporter} = require('../models/email.model');



// => localhost:3000/orders
router.get('/',(req,res)=>{
  order.find((err, docs) =>{
    if(!err){res.send(docs); }
    else { console.log('Error in Retriving Orders : ' + JSON.stringify(err,undefined,2));}
  });
});
router.get('/acpt',(req,res)=>{ 
  order.find({order_status:'Accepted'},(err, docs) =>{
    if(!err){res.send(docs); }
    else { console.log('Error in Retriving Orders : ' + JSON.stringify(err,undefined,2));}
  });
});
router.get('/reqe',(req,res)=>{
  order.find({order_status:'requested'},(err, docs) =>{
    if(!err){res.send(docs); }
    else { console.log('Error in Retriving Orders : ' + JSON.stringify(err,undefined,2));}
  });
});
router.get('/count',(req,res)=>{
  order.find({order_status:'requested'},(err, docs) =>{
    if(!err) {
    res.send(JSON.stringify({count: docs.length})); }
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


function yuh(req,prevOrder_id,prevPayment_id){
  ord= {
    date : req.body.date,
    order_id: prevOrder_id,
    service_id: req.body.service_id,
    cus_name:req.body.cus_name,
    cus_phone: req.body.cus_phone,
    cus_address:req.body.cus_address,
    cus_email: req.body.cus_email,
    payment_id:prevPayment_id,
    order_status:req.body.order_status,
  };
  return ord
}

router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

    // waterfall(tasks, callback);
     const update= async() =>{
     /////////////////////Update Order_id  and payment_id////////////////////// 
         var prevOrder_id=5112;
         var prevPayment_id=5217;
         await  order.find((err, docs) =>{
                  prevOrder_id=0;
                  prevPayment_id=0;
                  for( orders of docs){
                    if(orders.order_status=='Accepted'){
                      if(orders.order_id>prevOrder_id){
                        prevOrder_id=orders.order_id;
                      }
                      if(orders.payment_id>prevPayment_id){
                        prevPayment_id=orders.payment_id;
                      }
                    }
                  }
                  prevOrder_id+=1; 
                  prevPayment_id+=1; 
                }).exec();  
        var ord= await yuh(req,prevOrder_id,prevPayment_id);

         await order.findByIdAndUpdate(req.params.id, { $set: ord }, { new: true }, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in Order Update :' + JSON.stringify(err, undefined, 2)); }
         });
      }

      update();
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
    service_id: req.body.service_id,
    cus_name:req.body.cus_name,
    cus_phone: req.body.cus_phone,
    cus_address:req.body.cus_address,
    cus_email: req.body.cus_email,
    payment_id:req.body.payment_id,
    order_status:req.body.order_status,
  });
  var draft= 'You got a new Order from  "'+
    ord.cus_name+'"\n'+
    ord.cus_email+'\n'+
    ord.cus_phone+'\n'+
    ord.cus_address+'\n\n'+
    'Order ID:    '+ord.order_id+'\n'+
    'Service ID:  '+ord.service_id+'\n'+
    'Payment ID:  '+ord.payment_id+'\n'+
    'Date:        '+ord.date;
  ord.save((err,doc)=>{
    if(!err){
      var mailOptions = {                ///////////////////////email///////////////////
      from: '@gmail.com',
      to: '@gmail.com',
      subject: 'GAMUNU CONSTRUCTION new ORDER',
      text:draft
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log('Error! Couldn\'t send the Email\n'+error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });  

     res.send(doc); 
    }
    
    else { console.log('Error in Order Save : ' + JSON.stringify(err,undefined,2));}
  });
});
module.exports = router;
