Template.userCard.helpers
  name: ->
    if @ and @profile and @profile.contactName
      "#{@profile.contactName}"
    else
      ""
  gravatarUrl: -> @profile.email if @ and @profile and @profile.email
  subhead: ->
    if @ and @profile
      if @profile.company and @profile.location
        [@profile.company, @profile.location].join(' - ')
      else
        if @profile.company
          return @profile.company
        if @profile.location
          return @profile.location

  bio: -> @profile.elevatorPitch if @ and @profile
  url: -> @profile.url if @ and @profile
  googlePlusUrl: -> @profile.googlePlusUrl if @ and @profile
  twitterHandle: -> @profile.twitterHandle if @ and @profile
