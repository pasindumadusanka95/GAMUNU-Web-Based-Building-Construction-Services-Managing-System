const mongoose =require('mongoose');
const bcrypt = require('bcrypt');
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

workerSchema.pre('save', function (next) {
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(this.worker_password, salt, (err, hash) => {
			this.worker_password = hash;
			this.saltSecret = salt;
			next();
		})
	})
})

mongoose.model('worker', workerSchema)
