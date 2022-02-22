class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(obj) {
    let val = (this.data[this.top] = obj);
    this.top++;
    return val;
  }
  peek() {
    return this.store[this.top];
  }
  pop() {
    return this.store[--this.top];
  }
}

const stack = new Stack();

stack.push(5);
stack.push(5);

const foo = stack.pop;
console.log(foo);

// const normalStack = [];
// normalStack.push(5);
// console.log(normalStack);
