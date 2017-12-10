var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  facebook: {
    id:    String,
    token: String
  },
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  role: String,
  gender: String,
  organization: String,
  intro: String,
  events: [{type: mongoose.Schema.Types.ObjectId, ref: 'EventModel'}],
  follow: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}],
  followed: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}],
  dateCreated: {type: Date, default: Date.now}
}, {collection: 'user'});

module.exports = UserSchema;
