var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '@gmail.com',
    pass: ''
  }
});

module.exports = {transporter};

