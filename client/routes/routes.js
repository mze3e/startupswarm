Router.map(function() {

  this.route('index', {path: '/'});
  this.route('event', {path: '/'});

  this.route('event', {
  path: '/event/:_id',
  data: function() { return Events.findOne(this.params._id); }
  });

  this.route('about', {path: '/about'});
});


Router.configure({
  layoutTemplate: 'masterLayout'
})
