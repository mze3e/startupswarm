Template.register.helpers({
  count: function(tEventId){
      return Events.find({_id: this._id, "registeredStartups": {$elemMatch : {"userId": Meteor.user()._id}}}).count()
  }
});
