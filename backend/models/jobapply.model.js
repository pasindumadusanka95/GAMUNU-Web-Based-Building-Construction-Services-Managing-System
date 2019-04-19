const mongoose =require('mongoose');

var jobapply = mongoose.model('jobapply',{
  worker_id : {type: Number},
  worker_name: {type: String},
  worker_nic: {type: String},
  worker_phone :{type:Number},
  worker_address:{type:String},
  job_type:{type: String}

});

module.exports = {jobapply};
