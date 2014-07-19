Template.masthead.helpers({
  home: function() {
    console.log(Router.current());
    return Router.current() == '/';
  }
});
