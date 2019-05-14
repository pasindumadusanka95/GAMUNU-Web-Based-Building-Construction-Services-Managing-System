const mongoose =require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
	username:{type: String},
	password:{type: String},
	saltSecret: String
});

workerSchema.pre('save', function (next) {
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(this.password, salt, (err, hash) => {
			this.password = hash;
			this.saltSecret = salt;
			next();
		})
	})
})

//methods
workerSchema.methods.verifyPassword = function (password) {
	return bcrypt.compareSync(password, this.password);
}

workerSchema.methods.generateJwt = function () {
	return jwt.sign({ _id: this._id }, process.env.jwt_secret);
}
mongoose.model('worker', workerSchema)
