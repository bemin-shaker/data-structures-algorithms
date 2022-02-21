class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //Adds node to start of list
  unshift(data) {
    let newNode = new Node(data, this.head);
    if ((this.length = 0)) {
      this.head = newNode;
    }
    this.head = newNode;
    this.length++;
  }
}

module.exports = LinkedList;
