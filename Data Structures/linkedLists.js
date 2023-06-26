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

  getFirst() {
    return this.head;
  }

  getLast() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }
}

let newLL = new LinkedList();

newLL.unshift(2);
newLL.unshift(2);

console.log(newLL.getLast());
