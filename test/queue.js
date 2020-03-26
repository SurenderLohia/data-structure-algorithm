var Queue = require('./../src/queue').Queue;
var expect = require('chai').expect;


describe('Queue', function() {
  let q;

  this.beforeEach(function() {
    // Basic setup
    q = new Queue();
    
    q.enQueue('a');
    q.enQueue('b');
    q.enQueue('c');
  });

  it('#enQueue should add a given element in to the queue', function() {
    const expectedSet = ['a', 'b', 'c', 'd'];

    q.enQueue('d')
    expect(q.values()).to.deep.equal(expectedSet);
  });

  it('#deQueue should remove element from the queue', function() {
    const expectedSet = ['b', 'c'];

    q.deQueue();
    expect(q.values()).to.deep.equal(expectedSet);
  });

  
  // Todo: Need to add test cases for other methods
});