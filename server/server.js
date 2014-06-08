Meteor.startup(function () {





});


  Meteor.publish("events", function (args) {

    //console.log(args.searchString);
    //console.log(args.limit);
      return Events.find();
  });
