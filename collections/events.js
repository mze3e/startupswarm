Events = new Meteor.Collection("events", {
    schema: {
        name: {
            type: String,
            label: "Event Name"
        },
        cost: {
            type: Number,
            label: "Ticket Cost",
            min: 0
        },
        country: {
            type: String,
            label: "Country"
        },
        date: {
            type: String,
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
        min: {
            type: Number,
            label: "Minimum Startups",
            min: 1
        },
        registered: {
            type: Number,
            label: "Registered Startups",
            min: 1
        }
    }});

Events.allow({
  insert: function (userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    return (userId && doc.owner === userId);
  },
  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return doc.owner === userId;
  },
  remove: function (userId, doc) {
    // can only remove your own documents
    return doc.owner === userId;
  },
  fetch: ['owner']
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
