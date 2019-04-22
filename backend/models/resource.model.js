const mongoose =require('mongoose');

var resource = mongoose.model('resource',{
  resource_id : {type: Number},
  resource_type: {type: String},
  resource_name: {type: String},
  resource_owner:{type:String},
  resource_count: {type: Number},
  available:{type: Number}


});

module.exports = {resource};
