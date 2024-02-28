const LinkedList = require("./cLinkedList");

class linkedListQueue {
	constructor() {
		this.list = new LinkedList();
	}
	enqueue(value) {
		this.list.append(value);
	}
 dequeue() {
		if (!this.isEmpty()) {
			let temp = this.list.head.value;
			return this.list.removeFromFront();
			return temp;
		} else {
			return false;
		}
	}
	peek() {
		if (this.isEmpty()) {
			console.log("the Queue is empty : ");
			return null;
		}
		return this.list.head.value;
	}
	isEmpty() {
		return this.head.isEmpty();
	}
	getSize() {
		return this.list.getSize();
	}
	isEmpty() {
		return this.list.isEmpty();
	}
	print() {
		this.list.print();
	}
}
let q = new linkedListQueue();

q.enqueue(10);
q.enqueue(11);
q.enqueue(12);
q.dequeue();
// q.dequeue();
// q.dequeue();
console.log("the size : ", q.getSize());
console.log("the tail  : ", q.peek());
q.print();
