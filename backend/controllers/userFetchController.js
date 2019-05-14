const mongoose = require('mongoose');
const express = require('express');
var router = express.Router();
const _ = require('lodash');

const Worker = mongoose.model('worker');

// module.exports.userProfile = (req, res, next) =>{
// 	console.log("Fetch works")
//     Worker.findOne({ _id: req._id },
//         (err, user) => {
//             if (!user)
//                 return res.status(404).json({ status: false, message: 'User record not found.' });
//             else
//                 return res.status(200).json({ status: true, user : _.pick(user,['worker_id','worker_name','worker_nic','worker_phone','worker_address','job_type']) });
//         }
//     );
// }

router.get('/', (req, res, next) =>{
	console.log("Fetch works")
	console.log(req._id);
    Worker.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['worker_id','worker_name','worker_nic','worker_phone','worker_address','job_type']) });
        }
    );
})

module.exports = router;