class Queue {
	constructor() {
		this.arrQueue = [];
		this.front = -1;
		this.rear = -1;
	}
	enqueue(element) {
		if (this.front == -1 && this.rear == -1) {
			this.front = this.rear = 0;
			this.arrQueue[this.front] = element;
		} else {
			this.arrQueue[++this.rear] = element;
		}
	}
	isEmpty() {
		return this.front == -1 && this.rear == -1;
	}
	dequeue() {
		if (this.isEmpty()) {
			console.log("you should add elements first then dequeue");
		}

		if (this.front == this.rear) {
			this.front = this.rear = -1;
			this.arrQueue.length = 0;
		} else {
			return this.arrQueue[this.front++];
		}
	}
	size() {
		return this.arrQueue.length;
	}
	print() {
		if (this.isEmpty()) {
			console.log("the Queue is Empty : ");
		} else {
			console.log("-----Queue----");
			for (let i = this.front; i <= this.rear; i++) {
				console.log(this.arrQueue[i]);
			}
		}
	}
	peek() {
		if (!this.isEmpty()) {
			return this.arrQueue[this.front];
		}
	}
}

let q = new Queue();
q.enqueue(5);
q.enqueue(6);
q.enqueue(7);
q.enqueue(8);
q.dequeue();
q.dequeue();
console.log(q);
q.print();
console.log("the top element is   : ",q.peek());
console.log(q);
q.dequeue();
q.dequeue();


console.log(`Queue Empty status : ${q.isEmpty()} `);
