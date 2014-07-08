Meteor.startup(function () {





});


  Meteor.publish("events", function (args) {

    //console.log(args.searchString);
    //console.log(args.limit);
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
