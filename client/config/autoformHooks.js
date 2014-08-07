AutoForm.addHooks(['suggestForm','contactForm','insertEventForm','updateEventForm','suggestEventForm'], {
    onSuccess: function(operation, result, template) {
      alert("Form Submitted Successfully.");
      Router.go('/');
    }, 
    onError: function(operation, error, template) {
      alert("There was some error in submitting your form. Try again. The error was: " + error);
    }
});
