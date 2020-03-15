var Stack = function() {
  this.count = 0;
  this.storage = {};

  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
    return value;
  }

  this.pop = function() {
    if(this.count === 0) {
      return 'undefined';
    }

    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  this.size = function() {
    return this.count;
  }

  this.peek = function() {
    return this.storage[this.count-1];
  }
}

const myStack = new Stack();

module.exports = Stack;

myStack.push(10);
myStack.push(20);
myStack.size() // 2;
myStack.peek(); // 20
myStack.pop() // 20
myStack.push(30);
myStack.peek() // 30