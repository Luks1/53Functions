var hello_list = require('../hello_list');
var assert = require('assert');

describe(' hello_list', function(){

    it('it should takes a number as parameter and returns a list of "hello world"', function(){
        assert.equal(hello_list(20).length,20);
    });

});
