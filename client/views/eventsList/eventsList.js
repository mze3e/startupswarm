Meteor.subscribe('events');
Meteor.subscribe('registrations');

Template.eventsList.event = function() {
  return Events.find();
};
Template.event.rendered = function ( ) { Holder.run(); };
