Template.profile.rendered = ->
  $('#bio').keydown( (event) ->
    if event.keyCode == 13
      $('#bio').blur()
  )

Template.profile.helpers
  email:         -> Meteor.user().emails[0].address if Meteor.user() and Meteor.user().emails?
  contactName:   -> Meteor.user().profile.contactName if Meteor.user()
  company:       -> Meteor.user().profile.company if Meteor.user()
  location:      -> Meteor.user().profile.location if Meteor.user()
  elevatorPitch: -> Meteor.user().profile.elevatorPitch if Meteor.user()
  url:           -> Meteor.user().profile.url if Meteor.user()
  googlePlusUrl: -> Meteor.user().profile.googlePlusUrl if Meteor.user()
  twitterHandle: -> Meteor.user().profile.twitterHandle if Meteor.user()

Template.profile.events
  'click .done': ->
    if Meteor.user().profile.contactName
      Router.go('/')
    else
      $('.errors').text('Contact name is required.')

  'change #email': (event) ->
    Meteor.call('changeEmail', Meteor.userId(), $(event.target).val())

  'change #contactName': (event) ->
    Meteor.users.update Meteor.userId(),
      $set:
        'profile.contactName': $(event.target).val()


  'change #company': (event) ->
    Meteor.users.update Meteor.userId(),
      $set:
        'profile.company': $(event.target).val()

  'change #location': (event) ->
    Meteor.users.update Meteor.userId(),
      $set:
        'profile.location': $(event.target).val()

  'change #elevatorPitch': (event) ->
    Meteor.users.update Meteor.userId(),
      $set:
        'profile.elevatorPitch': $(event.target).val()

  'change #url': (event) ->
    url = $(event.target).val()
    if not url.match(/^http/) and not url.match(/^https/) and url isnt ''
      url = 'http://' + url
    Meteor.users.update Meteor.userId(),
      $set:
        'profile.url': url

  'change #googlePlusUrl': (event) ->
    url = $(event.target).val()
    if not url.match(/^http/) and not url.match(/^https/) and url isnt ''
      url = 'http://' + url
    Meteor.users.update Meteor.userId(),
      $set:
        'profile.googlePlusUrl': url

  'change #twitterHandle': (event) ->
    Meteor.users.update Meteor.userId(),
      $set:
        'profile.twitterHandle': $(event.target).val()
