//var connectionString = 'mongodb://webappmaker:webappmaker@ds163181.mlab.com:63181/webappmaker';
var connectionString = 'mongodb://127.0.0.1:27017/project'; // for local

if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds047612.mlab.com:47612/heroku_pjc6bg5d'; //mlab
}

var mongoose = require("mongoose");
var db = mongoose.connect(connectionString, {
  useMongoClient: true
});

module.exports = db;
