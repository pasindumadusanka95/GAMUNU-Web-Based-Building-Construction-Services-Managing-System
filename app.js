
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://pasindu:<pasindu123>@cluster0-jhe8e.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("Web-Based-Building-Construction-Services-Managing-System").collection("devices");
  // perform actions on the collection object
  client.close();
});
