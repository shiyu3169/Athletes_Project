module.exports = function (app) {

  var eventModel = require('../../model/event/event.model.server');

  app.post("/api/user/:uid/event", createEvent);
  app.get("/api/user/:uid/event", findAllEventsForUser)
  app.get("/api/event/search/:key", searchEvent);;
  app.get("/api/event/:wid", findEventById);
  app.get("/api/event/:uid/findEvents", findEvents);
  app.put("/api/event/:wid", updateEvent);
  app.put("/api/event/:uid/register/:wid", register);
  app.delete("/api/event/:wid", deleteEvent);



  function createEvent(req, res) {
    var userId = req.params["uid"];
    var newWeb = req.body;
    eventModel.createEventForUser(userId, newWeb)
      .then(function () {
        res.json(null);
      });
  }

  function findAllEventsForUser(req, res) {
    var uid = req.params["uid"];
    eventModel.findAllEventsForUser(uid)
      .then(function(events) {
        res.json(events);
      });
  }

  function findEventById(req, res) {
    var wid = req.params["wid"];
    eventModel.findEventById(wid)
      .then(function(event) {
        res.json(event);
      });
  }

  function updateEvent(req, res) {
    var wid = req.params["wid"];
    var newWeb = req.body;
    eventModel.updateEvent(wid, newWeb)
      .then(function() {
        res.json(null);
      })
  }

  function deleteEvent(req, res) {
    var wid = req.params["wid"];
    eventModel.deleteEvent(wid)
      .then(function() {
      res.json(null);
    });
  }

  function searchEvent(req, res) {
    var key = req.params["key"];
    eventModel.seachEvent(key)
      .then(function(events) {
        res.json(events);
    });
  }

  function register(req, res) {
    var uid = req.params["uid"];
    var wid = req.params["wid"];
    eventModel.register(uid, wid)
      .then(function() {
        res.json(null);
      })
  }

  function findEvents(req, res) {
    var uid = req.params["uid"];
    eventModel.findEvents(uid)
      .then(function(events) {
        res.json(events);
      });
  }
};
