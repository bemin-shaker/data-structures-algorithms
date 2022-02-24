class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left || null;
    this.right = right || null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data, null, null);

    if (this.root === null) {
      this.root = node;
      return;
    }

    let current = this.root;
    let parent;

    while (current) {
      parent = current;
      if (data <= current.data) {
        current = current.left;
        if (current === null) {
          parent.left = node;
        }
      } else {
        current = current.right;
        if (current === null) {
          parent.right = node;
        }
      }
    }
  }

  //Returns the values of nodes in ascending order.
  traverseInOrder(node = this.root, arr = []) {
    if (node !== null) {
      this.traverseInOrder(node.left, arr);
      arr.push(node.data);
      this.traverseInOrder(node.right, arr);
    }
    return arr;
  }

  //rRturns the values of nodes beginning with the root
  //and then down the left branch of each subtree,
  //then the right branch of each subtree
  travserPreOrder(node = this.root, arr = []) {
    if (node !== null) {
      arr.push(node.data);
      this.traverseInOrder(node.left, arr);
      this.traverseInOrder(node.right, arr);
    }
    return arr;
  }

  //Returns the values of nodes beginning with the child nodes of the left subtree,
  //then the right branch of each subtree,
  //ending with the root
  traversePostOrder(node = this.root, arr = []) {
    if (node !== null) {
      this.traverseInOrder(node.left, arr);
      this.traverseInOrder(node.right, arr);
      arr.push(node.data);
    }
    return arr;
  }

  searchMin() {
    let current = this.root;

    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  searchMax() {
    let current = this.root;

    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  search(data) {
    let current = this.root;

    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
}

let tree = new Tree();
tree.insert(5);
tree.insert(2);
tree.insert(9);
console.log(tree.traverseInOrder());
console.log(tree.travserPreOrder());
console.log(tree.traversePostOrder());
console.log(tree.search(2));
