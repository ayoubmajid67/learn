const LinkedList = require("./cLinkedList");

class linkedListStack {
	constructor() {
		this.list = new LinkedList();
	}
	push(value) {
		this.list.prepend(value);
	}
	pop() {
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
			console.log("the Stack is empty : ");
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
		this.list.print(true);
	}
}
let s = new linkedListStack();

s.push(10);
s.push(11);
s.push(12);
s.pop();
s.pop();
s.pop();
console.log("the size : ", s.getSize());
console.log("the Head : ", s.peek());
s.print();
