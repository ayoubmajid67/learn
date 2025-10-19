class CircularQueue {
    constructor(capacity) {
      this.capacity = capacity;
      this.queue = new Array(capacity);
      this.head = 0; // Pointer to the front of the queue
      this.tail = 0; // Pointer to the end of the queue
      this.size = 0; // Current size of the queue
    }
  
    enqueue(item) {
      if (this.isFull()) {
        console.error("Queue is full, cannot enqueue.");
        return false;
      }
      this.queue[this.tail] = item;
      this.tail = (this.tail + 1) % this.capacity;
      this.size++;
      return true;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.error("Queue is empty, cannot dequeue.");
        return undefined;
      }
      const item = this.queue[this.head];
      this.head = (this.head + 1) % this.capacity;
      this.size--;
      return item;
    }
  
    peek() {
      if (this.isEmpty()) {
        console.error("Queue is empty, cannot peek.");
        return undefined;
      }
      return this.queue[this.head];
    }
  
    isFull() {
      return this.size === this.capacity;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    clear() {
      this.queue = new Array(this.capacity);
      this.head = this.tail = this.size = 0;
    }
  
    print() {
      let result = [];
      for (let i = 0; i < this.size; i++) {
        result.push(this.queue[(this.head + i) % this.capacity]);
      }
      console.log("Queue:", result.join(" "));
    }
  }
  
  // Example usage:
  const queue = new CircularQueue(5);
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.print(); // Queue: 1 2 3
  queue.dequeue();
  queue.print(); // Queue: 2 3
  queue.enqueue(4);
  queue.enqueue(5);
  queue.enqueue(6); // This will fail because the queue is full
  queue.print(); // Queue: 2 3 4 5
  