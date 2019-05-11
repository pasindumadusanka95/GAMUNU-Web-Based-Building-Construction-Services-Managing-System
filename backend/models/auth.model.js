const mongoose =require('mongoose');

var user = mongoose.model('user',{
	worker_nic :{type:Number},
  worker_password:{type: String},
});

module.exports = {user};