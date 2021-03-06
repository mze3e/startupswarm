Router.map(function() {

  this.route('index', {path: '/'});
  this.route('contactForm'), {path: '/contact'}
  this.route('event', {
  path: '/event/:_id',
  data: function() { return Events.findOne(this.params._id); }
  });

  this.route('')

  this.route('registerFullPage', {
  path: '/event/:_id/register',
  data: function() { return Events.findOne(this.params._id); }
  });

  this.route('editEvent', {
  path: '/event/:_id/edit',
  onBeforeAction: function() { Session.set("selectedDocId",this.params._id) }
  });

  this.route('about', {path: '/about'});

  this.route('addEvent', {path:'/addEvent'})

  this.route('suggestForm', {path:'/suggestForm'})
});


Router.configure({
  layoutTemplate: 'masterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


var IR_BeforeHooks = {
    // make sure to scroll to the top of the page on a new route
    // Use: global
    scrollUp: function() {
        $('body,html').scrollTop(0);
    },
    // if this route depends on data, show the NProgess loading indicator
    // http://ricostacruz.com/nprogress/
    // Use: global
    startNProgress: function() {
        if (_.isFunction(this.data)) {
          NProgress.start();
        }
    },
    // animate old content out using
    // http://daneden.github.io/animate.css/
    // Use: global
    animateContentOut: function() {
        $('#content').removeClass("animated fadeIn fadeInRight");
        $('footer').addClass("hide");
    }
}

var IR_AfterHooks = {
    // if you fade the content out, fade it in again
    // Use: global
    fadeContentIn: function() {
        $('#content').addClass("animated fadeIn");
        $('footer').removeClass("hide");
    },
    // If you started NProgress end it again
    // You can also pass NProgess.done directly to the after hook
    // Use: global
    endNProgess: function() {
        NProgess.done();
    }
}

// Router.onBeforeAction(IR_BeforeHooks.scrollUp);

Router.onBeforeAction(Houston._user_is_admin(Meteor.user()._id), {only: ['addEvent', 'editEvent']});

//Router.onBeforeAction(IR_BeforeHooks.animateContentOut);
//Router.onBeforeAction(IR_BeforeHooks.startNProgress);

//Router.onAfterAction(IR_AfterHooks.fadeContentIn);
//Router.onAfterAction(IR_AfterHooks.endNProgess);
