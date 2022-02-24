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
}

let tree = new Tree();
tree.insert(5);
tree.insert(2);
tree.insert(9);
console.log(tree);
