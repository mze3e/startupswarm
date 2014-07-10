Meteor.startup(function () {


});


  Meteor.publish("events", function (args) {
      return Events.find();
  });


Meteor.methods({
  sendEmail: function(doc) {
    // Important server-side check for security and data integrity
    check(doc, Schema.contact);

    // Build the e-mail text
    var text = "Name: " + doc.name + "\n\n"
            + "Email: " + doc.email + "\n\n\n\n"
            + doc.message;

    this.unblock();

    // Send the e-mail
    Email.send({
        to: "ahmedmzl@gmail.com",
        from: doc.email,
        subject: "Website Contact Form - Message From " + doc.name,
        text: text
    });
  }
});




Accounts.onCreateUser(function(options, user) {
  if (options.profile)
    user.profile = options.profile;

  user.profile.contactName = "";
  user.profile.company = "";
  user.profile.location = "";
  user.profile.elevatorPitch = "";
  user.profile.url = "";
  user.profile.googlePlusUrl = "";
  user.profile.twitterHandle = "";

  return user;
});


var cancelRegistration = function(userId, eventId) {
    Registrations.remove({userId: userId, eventId: eventId});
}
