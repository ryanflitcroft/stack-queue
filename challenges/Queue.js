export default class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    return this.queue.push(item);
  }

  dequeue() {
    return this.queue.length ? this.queue.shift() : null;
  }

  hasNext() {
    return !!this.queue.length;
  }
}

const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
console.log(queue.dequeue()); // 'fox'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'goose'
queue.enqueue('llama');
console.log(queue.dequeue()); // 'lizard'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'llama'
console.log(queue.hasNext()); // false
console.log(queue.dequeue()); // null
