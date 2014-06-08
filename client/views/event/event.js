Template.event.rendered = function ( ) { Holder.run(); };

function registerStartup() {
    form={};

    $.each($('#registerStartupForm').serializeArray(), function() {
        form[this.name] = this.value;
    });

    //do validation on form={firstname:'first name', lastname: 'last name', email: 'email@email.com'}

    MyCollection.insert(form, function(err) {
        if(!err) {
            alert("Submitted!");
            $('#registerStartupForm')[0].reset();
        }
        else
        {
            alert("Something is wrong");
            console.log(err);
        }
    });

}
