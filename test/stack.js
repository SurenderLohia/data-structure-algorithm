var Stack = require('./../src/stack');
var expect = require('chai').expect;

describe('Stack', function() {
  let myStack;
  this.beforeEach(function() {
    // Basic setup
    myStack = new Stack();

    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
  }); 
  it('#push should add element on top of the stack', function() {
    myStack.push(4);
    expect(myStack.storage[3]).to.equal(4);
  });

  it('#pop should remove top element from the stack', function() {
    expect(myStack.pop()).to.equal(3);
    expect(myStack.storage).to.deep.equal({0: 1, 1: 2});
  });

  it('#peek should return top element of the stack', function() {
    expect(myStack.peek()).to.equal(3);
  });

  it('#size should return size of the stack', function() {
    expect(myStack.size()).to.equal(3);
  });
});