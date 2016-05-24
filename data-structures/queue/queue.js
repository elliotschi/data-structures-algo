class Queue {
  constructor() {
    this.storage = {};
    this.tail = 0;
    this.head = 0;
  }
  
  enqueue(value) {
    this.storage[this.tail++] = value;
  }
  
  dequeue() {
    if (this.length() === 0) {
      return null;
    }
    
    let dequeued = this.storage[this.head];
    delete this.storage[this.head++];
    
    return dequeued;
  }
  
  length() {
    return this.tail - this.head;
  }
}

module.exports = Queue;