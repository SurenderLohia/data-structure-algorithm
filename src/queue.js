function Queue() {
  let collection = [];

  this.print = function() {
    console.log(collection);
  }

  this.enQueue = function(item) {
    return collection.push(item);
  }

  this.deQueue = function() {
    return collection.shift();
  }

  this.front = function() {
    return collection[0];
  }

  this.size = function() {
    return collection.length;
  }

  this.isEmpty = function() {
    return collection.length === 0;
  }

  this.values = function() {
    return collection;
  }
}

function priorityQueue() {
  let collection = [];
  this.print = function() {
    console.log('collection');
  }

  this.enQueue = function(element) {
    if(collection.length === 0) {
      collection.push(element);
    } else {
      var added = false;
      for(let i = 0; i < collection.length; i++) {
        // checking priority
        if(element[1] < collection[i][1]) {
          collection.splice(i, 0, element);

          added = true;
          break;
        }
      }

      if(!added) {
        collection.push(element);
      }
    }
  }

  this.deQueue = function() {
    var value = collection.shift();
    return value[0];
  };

  this.front = function() {
    return collection[0];
  }

  this.size = function() {
    return collection.length;
  }

  this.isEmpty = function() {
    return collection.length === 0;
  }
}

module.exports = {
  Queue,
  priorityQueue
};

// // Test cases
// let q = Queue();
// q.enQueue('a');
// q.enQueue('b');
// q.enQueue('b');
// q.print(); // ['a', 'b', 'c'];

// q.deQueue();
// q.print(); // ['b', 'c']

// q.front(); // b
// q.size(); // 2
// q.isEmpty(); // false

// // Test for priorityQueue
// var pq = new priorityQueue();

// pq.enQueue(['CSS', 2]);
// pq.enQueue(['HTML', 3]);
// pq.enQueue(['JavaScript', 1]);

// pq.print(); // [['JavaScript', 1], ['CSS', 2], ['HTML', 3]]

// pq.deQueue();
// pq.print() // [['CSS', 2], ['HTML', 3]]

// console.log(pq.front()); // ['CSS', 2]

// console.log(pq.size()); // 2

