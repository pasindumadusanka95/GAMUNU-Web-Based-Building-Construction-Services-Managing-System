const mongoose =require('mongoose');

var service = mongoose.model('service',{
  service_id : {type: Number},
  service_name: {type: String},
  service_type: {type: String},
  price :{type:String}

});

module.exports = {service};
