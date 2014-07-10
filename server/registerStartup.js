Meteor.methods({

register: function(eventId, userId,contactName,companyName) {
   Events.update({_id: eventId}, {$push: {"registeredStartups": {"userId": userId, "companyName": companyName , "contactName": contactName}}});
},
cancel: function(eventId, userId) {
   Events.update({_id: eventId}, {$pull: {"registeredStartups": {"userId": userId}}});
}


});
