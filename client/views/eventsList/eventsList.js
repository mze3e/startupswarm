Meteor.subscribe('events');

Template.eventsList.event = function() {
  return Events.find();
};
Template.event.rendered = function ( ) { Holder.run(); };
