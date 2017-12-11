var mongoose = require("mongoose");

var EventSchema = require('./event.schema.server');
var EventModel = mongoose.model('EventModel', EventSchema);

var UserSchema = require('../user/user.schema.server');
var UserModel = mongoose.model('UserModel', UserSchema);

EventModel.createEventForUser = createEventForUser;
EventModel.findAllEventsForUser = findAllEventsForUser;
EventModel.findEventById = findEventById;
EventModel.updateEvent = updateEvent;
EventModel.deleteEvent = deleteEvent;
EventModel.seachEvent = searchEvent;
EventModel.register = register;
EventModel.findEvents = findEvents;
EventModel.findAll = findAll;

module.exports = EventModel;

function createEventForUser(userId, event) {
  return EventModel.create(event)
    .then(function (event) {
      var eve = event;
      return UserModel.findUserById(userId)
        .then(function (user) {
          user.events.push(eve._id);
          return user.save();
        });
    });
}

function findAllEventsForUser(userId) {
  return EventModel.find({orgId: userId});
}

function findEventById(eventId) {
  return EventModel.findById(eventId);
}

function updateEvent(eventId, event) {
  return EventModel.update({_id: eventId}, event);
}

function deleteEvent(eventId) {
  var orgId = null;
  return EventModel.findEventById(eventId)
    .then(function(event) {
      orgId = event.orgId;
      return  EventModel.remove({_id: event._id})
        .then(function() {
          return UserModel.update(
            {_id: orgId},
            {$pull: {events: eventId}});
        });
    });
}

function searchEvent(key) {
  return EventModel.find({$text: {$search: key, $caseSensitive: false, $diacriticSensitive: false}})
    .populate('orgId').exec();
}

function register(uid, wid) {
  return EventModel.findEventById(wid)
    .then(function(event) {
      event.registered.push(uid);
      return event.save();
    })
    .then(function() {
      return UserModel.findUserById(uid)
        .then(function (user) {
          user.register.push(wid);
          return user.save();
        })
    })
}
function findEvents(uid) {
  return EventModel.find({registered: uid});
}



function findAll() {
  return EventModel.find();
}
