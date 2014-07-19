AutoForm.addHooks(['contactForm', 'updateEventForm', 'insertEventForm', 'suggestForm'], {
    after: {
      insert: function(error, result) {
        if (error) {
          alert("Error: ", error);
        } else {
          alert("Success! ", result);
        }
      },
      update: function(error) {
        if (error) {
          alert("Error: ", error);
        } else {
          alert("Updated!");
        }
      },
      remove: function(error) {
        alert("Error: ", error);
      }
    }
  });
