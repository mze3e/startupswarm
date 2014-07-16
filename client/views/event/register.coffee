Template.register.events = {
  'click #registerCompany': ->
      count = Events.find({_id: @_id, "registeredStartups": {$elemMatch : {"userId": Meteor.user()._id}}}).count()
      if true
          Meteor.call('register', @_id, Meteor.user());
      else
          alert 'You have already registered for the event. Only one registration is allowed for a startup.'

  'click #cancelRegistration': ->
      count = Events.find({_id: @_id, "registeredStartups": {$elemMatch : {"userId": Meteor.user()._id}}}).count()
      if count is 0
          alert 'You don\'t have an active registeration for the event. Feel free to register!'
      else
          Meteor.call('cancel', @_id, Meteor.user()._id)

  'click #registerNotLoggedIn': ->
      Router.go('/sign-up');
}
