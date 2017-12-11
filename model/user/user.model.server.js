var mongoose = require("mongoose");
var UserSchema = require('./user.schema.server');
var UserModel = mongoose.model('UserModel', UserSchema);
var EventSchema = require('./../event/event.schema.server');
var EventModel = mongoose.model('EventModel', EventSchema);

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.findUserByFacebookId = findUserByFacebookId;
UserModel.follow = follow;
UserModel.unfollow = unfollow;
UserModel.checkFollow = checkFollow;
UserModel.findFollowing = findFollowing;
UserModel.cancel = cancel;
UserModel.findRegister = findRegister;

module.exports = UserModel;


function findUserByFacebookId(facebookId) {
  return UserModel.findOne({'facebook.id': facebookId});
}


function createUser(user) {
  return UserModel.create(user);
}

function findUserById(uid) {
  return UserModel.findById(uid);
}

function findUserByUsername(username) {
  return UserModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
  return UserModel.findOne({username: username, password: password});
}

function updateUser(userId, user) {
  return UserModel.update({_id: userId}, user);
}

function deleteUser(userId) {
  return UserModel.remove({_id: userId});
}

function follow(uid, oid) {
  return UserModel.findUserById(uid)
    .then(function (user) {
      user.follow.push(oid);
      return user.save();
    })
    .then(function() {
      return UserModel.findUserById(oid)
        .then(function(org) {
          org.followed.push(uid);
          return org.save();
        });
    });
}

function unfollow(uid, oid) {
  return UserModel.update(
    {_id: uid},
    {$pull: {follow: oid}}
  ).then(function() {
    return UserModel.update(
      {_id: oid},
      {$pull: {followed: uid}}
    );
  });
}

function cancel(uid, wid) {
  return UserModel.update(
    {_id: uid},
    {$pull: {register: wid}}
  ).then(function() {
    return EventModel.update(
      {_id: wid},
      {$pull: {registered: uid}}
    );
  });
}

function checkFollow(uid, oid) {
  return UserModel.findOne({_id: uid, follow: oid});
}

function findFollowing(uid) {
  return UserModel.find({followed: uid});
}

function findRegister(wid, role) {
  return UserModel.find({register: wid, role: role});
}
