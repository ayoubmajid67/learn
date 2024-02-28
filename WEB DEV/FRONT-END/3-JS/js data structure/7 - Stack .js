class Stack {
	constructor() {
		this.arrStack = [];
		this.top = -1;
	}

	push(data) {
		this.arrStack[++this.top] = data;
	}

	pop() {
		if (this.top > -1) {
			this.arrStack.length = this.top--;
		}
	}

	topItem() {
		if (this.top === -1) return "the Stack is Empty";
		return this.arrStack[this.top];
	}
	checkEmpty() {
		return this.top == -1;
	}
	getLength() {
		return this.arrStack.length;
	}
}

// create new instance from Stack class;
let stack = new Stack();
// push new element to the stack :
stack.push(10);
stack.push(11);
stack.push(12);
// remove the last element in the stack :
stack.pop();

console.log("stack Empty  status : ", stack.checkEmpty());

console.log("stack Size : ", stack.getLength());

// log the top element of the stack :
console.log(stack.topItem());
