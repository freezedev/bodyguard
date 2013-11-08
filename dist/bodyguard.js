(function() {
  (function(name) {
    return udefine.configure(function(root) {
      return udefine.inject.add(name);
    });
  })('bodyguard');

}).call(this);

(function() {
  udefine('bodyguard', function() {
    var bodyguard, noop;
    noop = function() {};
    bodyguard = function(definition, obj, context) {
      var method, _i, _len;
      context || (context = {});
      if (Array.isArray(definition)) {
        for (_i = 0, _len = definition.length; _i < _len; _i++) {
          method = definition[_i];
          if (obj[method] != null) {
            obj[method] = noop;
          }
        }
      }
      return context;
    };
    return bodyguard;
  });

}).call(this);
