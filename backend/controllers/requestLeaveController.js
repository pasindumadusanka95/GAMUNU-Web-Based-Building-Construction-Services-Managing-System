const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {leaveapply} = require('../models/Leaveapply.model');

router.post('/',(req,res)=>{
  console.log(req.body);
    var leave= new leaveapply({

      from_date:  req.body.from_date,
      to_date: req.body.to_date,
      sick:req.body.sick,
      bereavement:req.body.bereavement,
      timeoff:req.body.timeoff,
      other: req.body.other,

  });

  leave.save((err,doc)=>{
    if(!err){res.send(doc);
     console.log('successfully submitted')}
    else { console.log('Error in apply requestleave form : ' + JSON.stringify(err,undefined,2));}
  });
});
router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

      var leave= {
        from_date:  req.body.fromdate,
        to_date: req.body.todate,
        sick:req.body.sick,
        bereavement:req.body.bereavement,
        timeoff:req.body.timeoff,
        other: req.body.other,

      };
  leaveapply.findByIdAndUpdate(req.params.id, { $set: leave }, { new: true }, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in leave Update :' + JSON.stringify(err, undefined, 2)); }
  });
});
module.exports = router;
