class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(element) {
    this.data[this.top] = element;
    this.top++;
  }

  peek() {
    //return this.data[this.top - 1];
    return this.data.shift();
  }

  pop() {
    return this.data.pop();
  }
}

let stack = new Stack();

stack.push(5);
stack.push(4);

console.log(stack);
console.log(stack.peek());
