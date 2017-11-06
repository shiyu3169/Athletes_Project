var mongoose = require("mongoose");

var WebsiteSchema = require('./website.schema.server');
var WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);

var UserSchema = require('../user/user.schema.server');
var UserModel = mongoose.model('UserModel', UserSchema);

WebsiteModel.createWebsiteForUser = createWebsiteForUser;
// WebsiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
// WebsiteModel.findWebsiteById = findWebsiteById;
// WebsiteModel.updateWebsite = updateWebsite;
// WebsiteModel.deleteWebsite = deleteWebsite;

module.exports = WebsiteModel;

function createWebsiteForUser(userId, website){
  return WebsiteModel.create(website)
    .then(function (website) {
      var web = website;
      UserModel.findUserById(userId)
        .then(function (user) {
          user.websites.push(web._id);
          return user.save();
        });
    });
}