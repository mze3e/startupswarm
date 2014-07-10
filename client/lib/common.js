Handlebars.registerHelper('currentUserIsAdmin', function() {
  if(Meteor.user())
    {
      return Houston._user_is_admin(Meteor.user()._id)
    }
  return false
});
