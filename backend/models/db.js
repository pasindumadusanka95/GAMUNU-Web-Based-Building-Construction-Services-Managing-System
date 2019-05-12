const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://pasindu2:pasindu2@cluster0-elbkn.mongodb.net/WebDB?retryWrites=true", { useNewUrlParser: true }, (err)=>{
  if (!err) { console.log('MongoDB connection succeeded');}
  else{
    console.log('Error in MongoDB connection: ' + JSON.stringify(err, undefined, 2));
  }
});

require('./jobapply.model');
require('./worker.model');