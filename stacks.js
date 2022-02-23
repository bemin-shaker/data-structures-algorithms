class Stack {
  constructor() {
    this.data = [];
  }

  //Add item to start of array
  push(item) {
    this.data.unshift(item);
  }

  //Remove from start of array
  pop() {
    return this.data.shift();
  }

  //Return first element in array
  peek() {
    return this.data[0];
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

let stack = new Stack();

stack.push(5);
stack.push(4);

console.log(stack);
console.log(stack.peek());
console.log(stack.isEmpty());
