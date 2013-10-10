(function() {
  (function(name) {
    return udefine.configure(function(root) {
      this.globals[name.toLowerCase()] = root[name];
      return this.inject[name.toLowerCase()] = {
        name: name,
        root: root
      };
    });
  })('guardian');

}).call(this);

(function() {
  udefine('guardian', function() {
    var bodyguard, noop;
    noop = function() {};
    bodyguard = function(definition, obj) {
      var method, result, _i, _len, _results;
      result = {};
      if (Array.isArray(definition)) {
        _results = [];
        for (_i = 0, _len = definition.length; _i < _len; _i++) {
          method = definition[_i];
          if (obj[method] != null) {
            _results.push(obj[method] = noop);
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      }
    };
    return bodyguard;
  });

}).call(this);
