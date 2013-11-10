(function() {
  var bodyguard, expect;

  require('udefine/global');

  bodyguard = require('../dist/bodyguard');

  expect = require('chai').expect;

  describe('bodyguard', function() {
    it('is a function', function() {
      return expect(bodyguard).to.be.a('function');
    });
    it('throws an exception when no name is defined', function() {
      return expect(function() {
        return bodyguard();
      }).to["throw"](Error);
    });
    it('returns undefined if no definition or object is defined', function() {
      expect(bodyguard('test')).to.be.a('undefined');
      return expect(bodyguard('test')).to.equal(void 0);
    });
    return it('has silence property', function() {
      return expect(bodyguard).to.have.a.property('silent');
    });
  });

}).call(this);
