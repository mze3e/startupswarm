Meteor.subscribe('events');

Template.eventsList.event = function() {
  return Events.find();
};

Template.eventsList.rendered = function ( ) { Holder.run(); };

Template.eventsList.test = getRandomInt(20,100);
