const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// var jobapply = mongoose.model('jobapply',{
//   worker_id : {type: Number},
//   worker_name: {type: String},
//   worker_nic: {type: String},
//   worker_phone :{type:Number},
//   worker_address:{type:String},
//   job_type:{type: String},
//   worker_password:{type: String},

// });


var jobapplySchema = new mongoose.Schema({
	worker_id: {
		type: Number
	},
	worker_name: {
		type: String,
		required: 'Full name cannot be empty'
	},
	worker_nic: {
		type: String,
		required: 'NIC cannot be empty',
		unique: true
	},
	worker_phone: {
		type: Number,
		required: 'Contact number cannot be empty'
	},
	worker_address: {
		type: String,
		required: 'Address cannot be empty'
	},
	job_type: {
		type: String,
		required: 'Preffered job type cannot be empty'
	},
	worker_password: {
		type: String,
		required: 'Password cannot be empty',
		minlength: [6, 'Password must be atleast 6 character long']
	},
	// saltSecret: String
})

//generate hash and key for password

// jobapplySchema.pre('save', function (next) {
// 	bcrypt.genSalt(10, (err, salt) => {
// 		bcrypt.hash(this.worker_password, salt, (err, hash) => {
// 			this.worker_password = hash;
// 			this.saltSecret = salt;
// 			next();
// 		})
// 	})
// })

jobapplySchema.path('worker_nic').validate((val) => {
	nicRegex = /^[0-9]{9}[x|X|v|V]$/
	return nicRegex.test(val);
}, 'Invalid NIC');

mongoose.model('jobapply', jobapplySchema)

// module.exports = {jobapply};
