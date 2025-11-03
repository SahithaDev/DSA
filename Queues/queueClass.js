class queue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    this.queue.push(item);
  }
  dequeue() {
    return this.queue.shift();
  }
  peek() {
    return this.queue[0];
  }
}
const queue1 = new queue();
queue1.enqueue(10);
queue1.enqueue(11);
queue1.enqueue(12);
queue1.dequeue();
console.log(queue1);
console.log(queue1.peek());
