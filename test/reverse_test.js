var reverse = require('../reverse');
var assert = require('assert');


describe('reverse function', function(){

  it("it should reverse 'skuL'", function(){

    var results = reverse('Luks');

    assert.equal(results, 'skuL');
  });
});
