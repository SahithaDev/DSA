class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
}
const stack1 = new Stack();
stack1.push(19);
stack1.push(20);
stack1.push(18);
stack1.pop();
console.log(stack1);
console.log(stack1.peek());
