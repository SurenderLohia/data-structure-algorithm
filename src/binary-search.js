class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  };
};

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    if(this.root === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if(data < node.data) {
          if(node.left === null) {
            node.left = new Node(data);
            return;
          } else if(node.left !== null) {
            return searchTree(node.left);
          }
        } else if(data > node.data) {
          if(node.right === null) {
            node.right = new Node(data);
            return;
          } else if(data.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }
      searchTree(this.root);
    }
  }

  findMin() {
    let currentNode = this.root;
    while(currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  findMax() {
    let currentNode = this.root;
    while(currentNode.right !== null) {;
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }

  find(data) {
    let currentNode = this.root;
    while(currentNode.data !== data) {
      if(data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
      if(currentNode === null) {
        return null;
      }
    }
    return currentNode;
  }

  isPresent(data) {
    let currentNode = this.root;
    while(currentNode) {
      if(data === currentNode.data) {
        return true;
      } else if(data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false; 
  }

  remove(data) {
    const removeNode = function(node, data) {
      if(node == null) {
        return null;
      }

      if(data == node.data) {
        if(node.left === null && node.right === null) {
          return null;
        }

        if(node.left === null) {
          return node.right;
        }

        if(node.right === null) {
          return node.left;
        }

        // node has two child
        let tempNode = node.right;
        while(tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        tempNode.right = removeNode(tempNode.right, node.data);
        return node;
      } else if(data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }

    this.root = removeNode(this.root, data);
  }
}


module.exports= BST;

// test cases
// const bst = new BST();

// bst.add(4);
// bst.add(2);
// bst.add(6);
// bst.add(1);
// bst.add(6);
// bst.add(5);
// bst.add(7);

// console.log(bst);
// bst.remove(4);
// console.log(bst);
// console.log('min: ', bst.findMin()); // 1
// console.log('max: ', bst.findMax()); // 7

// console.log(bst);
// bst.remove(7);
// console.log('max: ', bst.findMax()); // 6
// console.log('isPresent', bst.isPresent(4));
// console.log('find', bst.find(6));




