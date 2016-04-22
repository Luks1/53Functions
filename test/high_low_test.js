
var high = require('../high');

var low = require('../low');

var assert = require('assert');

var numlist = [1, 2, 3, 4, 5];

describe("A high_low", function(){

  it('it should return the highest number in the list', function(){

    assert.equal(high(numlist),5);
  })
  it('it should return the lowest number in the list', function(){

    assert.equal(low(numlist),1);
  })
});
