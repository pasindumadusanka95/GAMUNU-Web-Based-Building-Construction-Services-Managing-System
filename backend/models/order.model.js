const mongoose =require('mongoose');

var order = mongoose.model('order',{
  date : {type: String},
  order_id: {type: Number},
  servic_id: {type: Number},
  cus_name: {type: String},
  cus_phone: {type: Number},
  cus_address: {type: String},
  cus_email: {type: String},
  payment_id: {type: Number}
});

module.exports = {order};
