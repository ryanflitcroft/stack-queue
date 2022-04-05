export default class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
    return this.stack.length ? this.stack.pop() : null;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  get size() {
    return this.stack.length;
  }
}

const stack = new Stack();
stack.push('fox');
stack.push('goose');
stack.push('lizard');

console.log(stack);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
stack.push('llama');
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size);
