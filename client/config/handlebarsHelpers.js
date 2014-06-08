Handlebars.registerHelper('dotdotdot', function(str,chars) {
  if (str.length > chars)
    return str.substring(0,chars) + '...';
  return str;
});


Handlebars.registerHelper('percent', function(min,count) {
  if (min < count)
    return 100;
  return count/min*100;
});

Handlebars.registerHelper('moreNeeded', function(min,count) {
  if (min < count)
    return count + "Startups Going";

  if (count>2)
  return (min-count)!=1?(min - count) + " More Startups Needed":"Just " + (min - count) + " More Startup Needed";
});

Handlebars.registerHelper('moreRequired', function(min,count) {
  if (count<=2)
  return (min-count)!=1?(min - count) + " More Startups Needed":"Just " + (min - count) + " More Startup Needed";
});

Handlebars.registerHelper("prettifyDate", function(timestamp) {
    return moment(new Date(timestamp)).format("dddd, MMMM Do YYYY") + " (" + moment(new Date(timestamp)).fromNow() + ")";
});
