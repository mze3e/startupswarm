Events = new Meteor.Collection("events", {
    schema: {
        name: {
            type: String,
            label: "Event Name"
        },
        imageUrl: {
            type: String,
            label: "Event Image URL"
        },
        cost: {
            type: String,
            label: "Ticket Cost (eg. USD 400)",
            min: 0
        },
        location: {
            type: String,
            label: "Event Location"
        },
        date: {
            type: Date,
            label: "Event Date"
        },
        description: {
            type: String,
            label: "Event Description"
        },
        link: {
            type: String,
            label: "Event Registration Link"
        },
        min: {
            type: Number,
            label: "Minimum Startups",
            min: 1
        },
        registeredStartups: {
            type: [Object],
            label: "Registered Startups",
            optional: true
        },
        "registeredStartups.$.userId": {
            type: String,
            label: "User ID",
            unique: true
        },
        "registeredStartups.$.companyName": {
            type: String,
            label: "Company Name"
        },
        "registeredStartups.$.contactName": {
            type: String,
            label: "Contact Name"
        },
        "registeredStartups.$.contactEmail": {
            type: String,
            label: "Contact Email",
            regEx: SimpleSchema.RegEx.Email
        },
        "registeredStartups.$.contactPhone": {
            type: String,
            label: "Contact Phone",
            optional: true
        }
    }});

Events.allow({
  insert: function (userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    return Houston._user_is_admin(userId);
  },
  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return true;
  },
  remove: function (userId, doc) {
    // can only remove your own documents
    return Houston._user_is_admin(userId);
  }
});

Events.deny({
  update: function (userId, docs, fields, modifier) {
    // can't change owners
    return _.contains(fields, 'owner');
  },
  remove: function (userId, doc) {
    // can't remove locked documents
    return doc.locked;
  },
  fetch: ['locked'] // no need to fetch 'owner'
});
