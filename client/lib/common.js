Handlebars.registerHelper('currentUserIsAdmin', function() {return Houston._user_is_admin(Meteor.user()._id)});

var isAdmin = function(userId) {return Houston._user_is_admin(userId)};
