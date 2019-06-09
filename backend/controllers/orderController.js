const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {order} = require('../models/order.model');
var {transporter} = require('../models/email.model');
var {promisify} = require('util');



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


function orderPay_values(req,prevOrder_id,prevPayment_id){
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
  return ord;
}

async function calOrderPay_ID(){
  var prevOrder_id;
  var prevPayment_id;
  
  /////////////////////Update Order_id  and payment_id////////////////////// 
        var t=await order.find().exec();

        prevOrder_id=0;
        prevPayment_id=0;
        for( orders of t){
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

        return await ([prevOrder_id,prevPayment_id]); 
}


router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

     /////////////////////Update Order_id  and payment_id////////////////////// 
      const update= async() =>{               
        var value;
        var ok=false;
        while (ok==false){
          value=await calOrderPay_ID();
          if(value[0]!=null && value[1]!=null){
            break;
          }
        }
        var ord= await orderPay_values(req,value[0],value[1]);
       
        var draft= 'Your order has been processed  '+
          '\n'+
          'Order ID :    '+value[0]+'\n'+
          'Service :     '+req.body.service_id+'\n'+
          'Payment ID :  '+value[1]+'\n'+
          'Date :        '+req.body.date+'\n\nFeel free to contact us for further details\n\nThank You\nGAMUNU Constructions';
          console.log(draft);

        await order.findByIdAndUpdate(req.params.id, { $set: ord }, { new: true }, (err, doc) => {
            if (!err) { 
              var mailOptions = {                ///////////////////////email///////////////////
                from: '@gmail.com',
                to: req.body.cus_email,
                subject: 'GAMUNU CONSTRUCTION - For Your ORDER',
                text:draft
              }
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log('Error! Couldn\'t send the Email\n'+error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              }); 
              res.send(doc); 
            }
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
    'Service ID:  '+ord.service_id+'\n'+
    'Date:        '+ord.date;
  ord.save((err,doc)=>{
    if(!err){
      var mailOptions = {                ///////////////////////email///////////////////
      from: '@gmail.com',
      to: '@gmail.com',
      subject: 'GAMUNU CONSTRUCTION NEW ORDER',
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
