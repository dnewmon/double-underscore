var __ = function(data) {
    var obj = {};
    
    obj.data = data;
    
    for (var prop in _) {
        obj[prop] = (function (prop) {
            return function () {
                var args = [this.data];
                for (var i = 0; i < arguments.length; i++) {
                    args.push(arguments[i]);
                }
                this.data = _[prop].apply(_, args);
                return this;
            };
        })(prop);
    }
    
    return obj;
};
