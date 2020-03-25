let MySet = function() {
  let collection = [];

  this.has = function(element) {
    return (collection.indexOf(element) !== -1);
  }

  this.add = function(element) {
    if(!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  }

  this.remove = function(element) {
    if(this.has(element)) {
      let index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  }

  this.size = function() {
    return collection.length;
  }

  this.values = function() {
    return collection;
  }

  this.union = function(otherSet) {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet =  otherSet.values();

    firstSet.forEach(function(element) {
      unionSet.add(element);
    });

    secondSet.forEach(function(element) {
      unionSet.add(element);
    });

    return unionSet;
  }

  this.intersection = function(otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();

    firstSet.forEach(function(element) {
      if(otherSet.has(element)) {
        intersectionSet.add(element);
      }
    });

    return intersectionSet;
  }

  this.different = function(otherSet) {
    let different = new mySet();
    let firstSet = this.values();

    firstSet.forEach(function(element) {
      if(!otherSet.has(element)) {
        different.add(element);
      }
    });

    return different;
  }

  this.subset = function(otherSet) {
    let firstSet = this.values();
    return firstSet.every(function(element) {
      return otherSet.has(element);
    });
  }
}

module.exports = MySet;