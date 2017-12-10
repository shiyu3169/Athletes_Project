var mongoose = require("mongoose");

var EventSchema = mongoose.Schema({
  orgId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  name: { type: String, index: true },
  description: String,
  pages: [{type: mongoose.Schema.Types.ObjectId, ref: 'PageModel'}],
  dateCreated: {type: Date, default: Date.now}
}, {collection: 'event'});

EventSchema.index({name: 'text'});

module.exports = EventSchema;
