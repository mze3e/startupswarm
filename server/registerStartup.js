Meteor.methods({

register: function(eventId, user) {
   Events.update({_id: eventId}, {$push: {"registeredStartups": {"userId": user._id, "companyName": user.profile.company , "contactName": user.profile.contactName, "contactEmail": user.emails[0].address}}});
},
cancel: function(eventId, userId) {
   Events.update({_id: eventId}, {$pull: {"registeredStartups": {"userId": userId}}});
}

});
