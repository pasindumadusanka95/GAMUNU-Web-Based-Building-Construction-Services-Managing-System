const mongoose =require('mongoose');

var leaveapply = mongoose.model('Leaveapply',{

  from_date: {type: String},
  to_date:{type:String},
  sick:{type:Boolean},
  bereavement:{type:Boolean},
  timeoff:{type:Boolean},
  other:{type: String},


});

module.exports = {leaveapply};
