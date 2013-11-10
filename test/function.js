(function() {
  var Parent, ReturnedClass, bodyguard, expect, instance, methods;

  require('udefine/global');

  bodyguard = require('../dist/bodyguard');

  expect = require('chai').expect;

  Parent = (function() {
    function Parent() {}

    Parent.prototype.a = function() {
      return 5;
    };

    Parent.prototype.b = function() {
      return 7;
    };

    return Parent;

  })();

  methods = ['a', 'b'];

  ReturnedClass = bodyguard('ReturnedClass', methods, new Parent());

  instance = new ReturnedClass();

  describe('bodyguard', function() {
    it('returns a new class', function() {
      return expect(ReturnedClass).to.be.a('function');
    });
    it('Returned class can be instantiated', function() {
      return expect(instance).to.be.a('object');
    });
    it('Returned class has methods according to the parent class', function() {
      expect(instance).to.have.a.property('a');
      return expect(instance).to.have.a.property('b');
    });
    return it('Methods have correct return values', function() {
      expect(instance.a()).to.equal(5);
      return expect(instance.b()).to.equal(7);
    });
  });

}).call(this);
