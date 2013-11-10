(function() {
  var bodyguard, expect;

  require('udefine/global');

  bodyguard = require('../dist/bodyguard');

  expect = require('chai').expect;

  describe('bodyguard', function() {
    it('is a function', function() {
      return expect(bodyguard).to.be.a('function');
    });
    return it('has silence property', function() {
      return expect(bodyguard).to.have.a.property('silent');
    });
  });

}).call(this);
