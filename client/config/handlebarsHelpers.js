Handlebars.registerHelper('dotdotdot', function(str,chars) {
  if (str && str.length > chars)
    return str.substring(0,chars) + '...';
  return str;
});


Handlebars.registerHelper('percent', function(event) {
  min = event.min;
  count = event.registeredStartups === undefined ? 0 : event.registeredStartups.length;

  if (min < count)
    return 100;
  return count/min*100;
});

Handlebars.registerHelper('moreNeeded', function(event) {

min = event.min;
count = event.registeredStartups === undefined ? 0 : event.registeredStartups.length;

if (min < count)
  return count + " Startups Going";

else if (count>2)
  return (min-count)!=1?(min - count) + " More Startups Needed to Qualify" :"Just " + (min - count) + " More Startup Needed to Qualify";
});

Handlebars.registerHelper('moreRequired', function(event) {
  min = event.min;
  count = event.registeredStartups === undefined ? 0 : event.registeredStartups.length;
  if (count<=2)
    return (min-count)!=1?(min - count) + " More Startups Needed to Qualify":"Just " + (min - count) + " More Startup Needed to Qualify";
});

Handlebars.registerHelper("prettifyDate", function(timestamp) {
    return moment(new Date(timestamp)).format("dddd, MMMM Do YYYY") + " (" + moment(new Date(timestamp)).fromNow() + ")";
});
