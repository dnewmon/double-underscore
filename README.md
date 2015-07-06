# double-underscore

This simple script changes the way you use underscore.js.
It is particularly useful when working with objects.

Instead of coding like this:

    var obj = { one: 1, two: 2, three: 3 };
    
    _.each(_.keys(obj), function (key) { // this is confusing, we are iterating through each 'key' of this object.
        console.log(key, obj[key]);
    });

With double-underscore, you can combine results of a previous operation and feed that into the next operation:

    __(obj).keys().each(function (key) { // this is more logical, get the keys, then iterate through them.
      console.log(key, obj[key]);
    });

If you need to access underlying data, you can use the 'data' property:

    var keys = __(obj).keys().data;

