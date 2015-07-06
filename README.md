# double-underscore

This simple script changes the way you use underscore.js.
It is particularly useful when working with objects.

Instead of coding like this:

    var obj = { one: 1, two: 2, three: 3 };
    
    // Reading this forces you to think backwards through the code:
    // First we see that we are iterating through each.
    // Then we see that we are iterating though keys.
    // Then we see the obj whose keys we are getting.
    _.each(_.keys(obj), function (key) {
        console.log(key, obj[key]);
    });

With double-underscore, you can combine results of a previous operation and feed that into the next operation:

    // This is more readable: 
    // With 'obj', get the keys(), and then iterate through them.
    __(obj).keys().each(function (key) { // this is more logical, get the keys, then iterate through them.
      console.log(key, obj[key]);
    });

If you need to access underlying data, you can use the 'data' property:

    var keys = __(obj).keys().data;

