var MySet = require('./../src/set');
var expect = require('chai').expect;

describe('MySet', function() {
  let setA, setB;

  this.beforeEach(function() {
    // Basic setup
    setA = new MySet();
    setB = new MySet();

    setA.add('a');

    setB.add('a');
    setB.add('b');
    setB.add('c');
    setB.add('d');
    setB.add('e');
  });

  describe('#has', function() {
    it('should return true if passed element present in the set', function() {
      setA.add('b');
      expect(setA.has('b')).to.equal(true);
    });

    it('should return false if passed element present in the set', function() {
      setA.add('b');
      expect(setA.has('c')).to.equal(false);
    });
  });

  describe('#add', function() { 
    it('#add should add a unique element to the set', function() {
      const expectedSet = ['a', 'b'];
  
      expect(setA.add('b')).to.equal(true);
      expect(setA.values()).to.deep.equal(expectedSet);
    });
  
    it('#add should not add duplicate element to the set', function() {
      const expectedSet = ['a'];
  
      expect(setA.add('a')).to.equal(false);
      expect(setA.values()).to.deep.equal(expectedSet);
    });
  });

  // Todo: Need to add test cases for other methods
});