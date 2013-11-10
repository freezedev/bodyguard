Bodyguard
=========

[![Build Status](https://travis-ci.org/freezedev/bodyguard.png?branch=master)](https://travis-ci.org/freezedev/bodyguard)
[![Dependency Status](https://david-dm.org/freezedev/bodyguard.png)](https://david-dm.org/freezedev/bodyguard)
[![devDependency Status](https://david-dm.org/freezedev/bodyguard/dev-status.png)](https://david-dm.org/freezedev/bodyguard#info=devDependencies)

Because sometimes you want something like interfaces in JavaScript

Installation
------------

If you are using Node.js: `npm install bodyguard`  
If you are using Bower: `bower install bodyguard`
(If you also want to save the configuration in your `package.json` or `bower.json` add `--save` to the command.)

Don't use npm or bower? Just grab `bodyguard.js` from the `dist` folder and embed it in your application.

Example
-------

JavaScript:
  
```javascript
var MyClass = (function() {
  var MyClass = function() {};
  
  MyClass.prototype.a = function() {
    return 5;
  };
  
  MyClass.prototype.b = function() {
    return 6;
  };
  
  MyClass.prototype.c = function() {
    return 7;
  };
})();

var NewClass = bodyguard('NewClass', ['a', 'b'], new MyClass());
// NewClass can now be instantiated and returns an object with a and b bound
// to its prototype
```


CoffeeScript:

```coffeescript
class MyClass
  constructor: ->
  
  a: -> 5
  b: -> 6
  c: -> 7
  
NewClass = bodyguard 'NewClass', ['a', 'b'], new MyClass()
# NewClass can now be instantiated and returns an object with a and b bound
# to its prototype
```

(Yes, we all know, technically we shouldn't be calling it classes in JavaScript. :) )
