Router.map(function() {

  this.route('index', {path: '/'});
  this.route('contactForm'), {path: '/contact'}
  this.route('event', {
  path: '/event/:_id',
  data: function() { return Events.findOne(this.params._id); }
  });

  this.route('registerFullPage', {
  path: '/event/:_id/register',
  data: function() { return Events.findOne(this.params._id); }
  });

  this.route('editEvent', {
  path: '/event/:_id/edit',
  onBeforeAction: function() { Session.set("selectedDocId",this.params._id) }
  });

  this.route('about', {path: '/about'});

  this.route('addEvent', {path:'/addEvent'});

  this.route('suggestEventForm', {path:'/suggestEvent'});

  this.route('profile', {path: '/profile', data: function() { return Meteor.user()}});
});


Router.configure({
  layoutTemplate: 'masterLayout'
});