# double-underscore
Alters the use of underscore.js

This simple script changes the way you use underscore.js.

Instead of coding like this:

  var obj = { one: 1, two: 2, three: 3 };

  _.each(_.keys(obj), function (key) { // this is confusing, we are iterating through each 'key' of this object.
    console.log(key, obj[key]);
  });

With double-underscore, you can combine results of a previous operation and feed that into the next operation:

  __(obj).keys().each(function (key) { // this is more logical, get the keys, then iterate through them.
    console.log(key, obj[key]);
  });

If you need to access the data at the end of your operations, you can do this:

  var types = __(results).groupBy(function (x) { return x.Type; }).data;
  var tiers = __(results).groupBy(function (x) { return x.Tier; }).data;
