var assert = require('assert');
var model = require('immodel').bootstrap({cast: require('..')});
  
describe('cast', function() {
  it('should work', function() {
    var tmp = model.caster(function() {
      return 'test';
    });
    
    assert(tmp.cast('asdf') === 'test');
  });
});