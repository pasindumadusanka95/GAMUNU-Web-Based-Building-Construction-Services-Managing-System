const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var Worker = mongoose.model('worker');

passport.use(
	new localStrategy(
		(username, password, done) => {
			Worker.findOne({ username: username},
				(err, worker) => {
					if (err) {
						console.log("object = "+ err);
						return done(err)
					}
					//unaccepted user
					else if (!worker) {
						return done(null, false, { message: 'NIC is not registered' });
					}
					//wrong password
					else if (!worker.verifyPassword(password)) {
						return done(null, false, { message: 'Wrong password' });
					}
					else{
						return done(null, worker)
					}
				}
			)		  
		}
	)
);