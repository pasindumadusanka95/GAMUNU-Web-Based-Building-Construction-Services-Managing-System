const mongoose =require('mongoose');

var order = mongoose.model('order',{
  date : {type: String},
  order_id: {type: Number},
  service_id: {type: String},
  cus_name: {type: String},
  cus_phone: {type: Number},
  cus_address: {type: String},
  cus_email: {type: String},
  payment_id: {type: Number},
  order_status:{type: String}
});

module.exports = {order};
