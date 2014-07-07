Template.register.helpers
  company:           -> Meteor.user().profile.company if Meteor.user()
  contactName:       -> Meteor.user().profile.contactName if Meteor.user()

Template.register.events = {
  'click #registerCompany': ->
      count = Events.find({_id: @_id, "registeredStartups": {$elemMatch : {"companyName": Meteor.user().profile.company}}}).count()
      if count is 0
          Events.update({_id: @_id}, {$push: {"registeredStartups": {"companyName": Meteor.user().profile.company , "contactName": Meteor.user().profile.contactName}}})
          Events.update({_id: @_id}, {$inc: {registered: 1}})
      else
          alert 'You have already registered for the event. Only one registration is allowed for a startup.'

  'click #cancelRegistration': ->
      count = Events.find({_id: @_id, "registeredStartups": {$elemMatch : {"companyName": Meteor.user().profile.company}}}).count()
      if count is 0
          alert 'You don\'t have an active registeration for the event. Feel free to register!'
      else
          Events.update({_id: @_id}, {$pull: {"registeredStartups": {"companyName": Meteor.user().profile.company}}})
          Events.update({_id: @_id}, {$inc: {registered: -1}})
  'click #registerNotLoggedIn': ->
      Router.go('home');
}
