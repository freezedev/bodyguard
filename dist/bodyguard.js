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
      var method, returnable, _i, _len;
      returnable = {};
      returnable[name] = function() {};
      returnable[name].constructor.name = name;
      if (Array.isArray(definition)) {
        for (_i = 0, _len = definition.length; _i < _len; _i++) {
          method = definition[_i];
          if (obj[method] != null) {
            returnable[name].prototype[method] = obj[method] || noop;
          } else {
            if (!bodyguard.silent) {
              if (typeof console !== "undefined" && console !== null) {
                if (typeof console.warn === "function") {
                  console.warn("Method " + method + " is not implemented.");
                }
              }
            }
            returnable[name].prototype[method] = function() {
              return bind(obj[method], this);
            };
          }
        }
      }
      return returnable[name];
    };
    bodyguard.silent = true;
    return bodyguard;
  });

  if (udefine.env.commonjs) {
    udefine.require('bodyguard', function(bodyguard) {
      return module.exports = bodyguard;
    });
  }

}).call(this);
