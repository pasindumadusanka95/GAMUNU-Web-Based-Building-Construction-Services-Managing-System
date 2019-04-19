const mongoose =require('mongoose');

var project = mongoose.model('project',{
  project_id : {type: Number},
  order_id: {type: Number},
  project_name: {type: String},
  start_date:{type:String},
  end_date: {type: String},
  project_loc:{type:String},
  cus_name: {type: String},
  project_status:{type: String},
  project_cost:{type: Number},
  worker_count:{type:Number}

});

module.exports = {project};
