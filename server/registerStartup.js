Meteor.methods({

register: function(eventId, user) {
   var count = Events.find({_id: eventId, "registeredStartups": {$elemMatch : {"userId": user._id}}}).count();
   if(count == 0)
        Events.update({_id: eventId}, {$push: {"registeredStartups": {"userId": user._id, "companyName": user.profile.company , "contactName": user.profile.contactName, "contactEmail": user.emails[0].address}}});
   else
   		return 'You have already registered for the event. Only one registration is allowed for a startup.'
},
cancel: function(eventId, userId) {
   Events.update({_id: eventId}, {$pull: {"registeredStartups": {"userId": userId}}});
}

});