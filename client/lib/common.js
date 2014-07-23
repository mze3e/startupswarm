Handlebars.registerHelper('currentUserIsAdmin', function() {
  if(Meteor.user())
    {
      return Houston._user_is_admin(Meteor.user()._id)
    }
  return false
});

AutoForm.addHooks(null, {
    after: {
      insert: function(error, result) {
        if (error) {
          console.log("Insert Error:", error);
        } else {
          console.log("Insert Result:", result);
        }
      },
      update: function(error) {
        if (error) {
          console.log("Update Error:", error);
        } else {
          console.log("Updated!");
        }
      },
      remove: function(error) {
        console.log("Remove Error:", error);
      }
    }
  });

