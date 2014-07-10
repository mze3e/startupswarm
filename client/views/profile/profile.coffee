Template.profile.rendered = ->
  $('#bio').keydown( (event) ->
    if event.keyCode == 13
      $('#bio').blur()
  )

Template.profile.helpers
  email:         -> Meteor.user().emails[0].address if Meteor.user() and Meteor.user().emails?
  contactName:   -> Meteor.user().profile.contactName if typeof Meteor.user().profile.contactName isnt 'undefined'
  company:       -> Meteor.user().profile.company if typeof Meteor.user().profile.company  isnt 'undefined'
  location:      -> Meteor.user().profile.location if typeof Meteor.user().profile.location  isnt 'undefined'
  elevatorPitch: -> Meteor.user().profile.elevatorPitch if typeof Meteor.user().profile.elevatorPitch isnt 'undefined'
  url:           -> Meteor.user().profile.url if typeof Meteor.user().profile.url isnt 'undefined'
  googlePlusUrl: -> Meteor.user().profile.googlePlusUrl if typeof Meteor.user().profile.googlePlusUrl isnt 'undefined'
  twitterHandle: -> Meteor.user().profile.twitterHandle if typeof Meteor.user().profile.twitterHandle isnt 'undefined'

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
