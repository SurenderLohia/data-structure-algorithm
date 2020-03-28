var BST = require('./../src/binary-search');
var expect = require('chai').expect;


describe('BST', function() {
  let bst;

  this.beforeEach(function() {
    // Basic setup
    bst = new BST();
    
    bst.add(4);
    bst.add(2);
    bst.add(6);
    bst.add(1);
    bst.add(6);
    bst.add(5);
    bst.add(7);
  });

  it.only('#add should add a node into the tree', function() {
    expect(bst.isPresent(10)).to.equal(false);
    bst.add(10);
    expect(bst.isPresent(10)).to.equal(true);
  });
  
  // Todo: Need to add test cases for other methods
});