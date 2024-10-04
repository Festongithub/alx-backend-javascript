const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('tests advanced calculateNumber function:', function(){
  describe('tests SUM function:', function() {
    it('returns 6.', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });
  describe('tests SUBTRACT function:', function() {
    it('returns -4.', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });
  describe('tests DIVIDE function:', function(){
    it('returns 0.2.', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
  });
  describe('tests DIVIDE function W 0:', function(){
    it("returns 'Error'.", function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
