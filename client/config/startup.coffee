Meteor.startup ->
  AccountsEntry.config
    logo: 'logo.png'
    privacyUrl: '/privacy-policy'
    termsUrl: '/terms-of-use'
    homeRoute: '/'
    dashboardRoute: '/profile'
    profileRoute: 'profile'
    passwordSignupFields: 'EMAIL_ONLY'
