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
  return EventModel.find({developerId: userId});
}

function findEventById(eventId) {
  return EventModel.findById(eventId);
}

function updateEvent(eventId, event) {
  return EventModel.update({_id: eventId}, event);
}

function deleteEvent(eventId) {
  var developerId = null;
  return EventModel.findEventById(eventId)
    .then(function(event) {
      developerId = event.developerId;
      return  EventModel.remove({_id: event._id})
        .then(function() {
          return UserModel.update(
            {_id: developerId},
            {$pull: {events: eventId}});
        });
    });
}
