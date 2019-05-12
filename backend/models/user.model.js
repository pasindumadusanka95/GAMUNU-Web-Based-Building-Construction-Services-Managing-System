const mongoose =require('mongoose');

var user = mongoose.model('user',{
	worker_nic :{type:String},
  worker_password:{type: String},
});

module.exports = {user};