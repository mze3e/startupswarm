Template.register.helpers({
  count: function(tEventId){
      return Events.find({eventId: tEventId})
  }
});
