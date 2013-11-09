(function() {
  (function(name) {
    return udefine.configure(function(root) {
      return udefine.inject.add(name);
    });
  })('bodyguard');

}).call(this);

(function() {
  udefine('bodyguard', function() {
    var bind, bodyguard, noop;
    noop = function() {};
    bind = function(func, context) {
      if (func != null) {
        return func.apply(context, arguments);
      }
    };
    bodyguard = function(name, definition, obj) {
      var method, returnFunction, _i, _len;
      returnFunction = function() {};
      returnFunction.constructor.name = name;
      if (Array.isArray(definition)) {
        for (_i = 0, _len = definition.length; _i < _len; _i++) {
          method = definition[_i];
          if (obj[method] != null) {
            returnFunction.prototype[method] = obj[method] || noop;
          } else {
            if (!bodyguard.silent) {
              if (typeof console !== "undefined" && console !== null) {
                if (typeof console.warn === "function") {
                  console.warn("Method " + method + " is not implemented.");
                }
              }
            }
            returnFunction.prototype[method] = function() {
              return bind(obj[method], this);
            };
          }
        }
      }
      return returnFunction;
    };
    bodyguard.silent = true;
    return bodyguard;
  });

}).call(this);
