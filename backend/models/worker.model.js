const mongoose =require('mongoose');

// var worker = mongoose.model('worker',{
//   worker_id : {type: Number},
//   worker_name: {type: String},
//   worker_nic: {type: String},
//   worker_phone :{type:Number},
//   worker_address:{type:String},
//   job_type:{type: String},
//   worker_password:{type: String},
//   saltSecret: String
// });

// module.exports = {worker};

var workerSchema = new mongoose.Schema({
	worker_id : {type: Number},
	worker_name: {type: String},
	worker_nic: {type: String},
	worker_phone :{type:Number},
	worker_address:{type:String},
	job_type:{type: String},
	worker_password:{type: String},
	saltSecret: String
});

mongoose.model('worker', workerSchema)
