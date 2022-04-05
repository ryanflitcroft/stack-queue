export default class Queue {
  constructor() {
    this.queue = [];
    this.index = 0;
  }

  enqueue(item) {
    return this.queue.push(item);
  }

  dequeue() {
    const item = this.queue[this.index];
    if (!this.hasNext()) return null;
    this.index++;
    return item;
  }

  hasNext() {
    return !!(this.queue.length - this.index);
  }

  get size() {
    return this.queue.length - this.index;
  }
}

// const queue = new Queue();
// queue.enqueue('fox');
// queue.enqueue('goose');
// queue.enqueue('lizard');
// console.log(queue.dequeue()); // 'fox'
// console.log(queue.hasNext()); // true
// console.log(queue.dequeue()); // 'goose'
// queue.enqueue('llama');
// console.log(queue.dequeue()); // 'lizard'
// console.log(queue.hasNext()); // true
// console.log(queue.dequeue()); // 'llama'
// console.log(queue.hasNext()); // false
// console.log(queue.dequeue()); // null
// console.log(queue.size);
