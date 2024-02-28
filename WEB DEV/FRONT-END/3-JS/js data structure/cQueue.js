class Queue {
	constructor() {
		this.arrQueue = [];
		this.front = -1;
		this.rear = -1;
	}
	enqueue(element) {
		if (this.isEmpty()) {
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
            const item = this.arrQueue[this.front];
			this.front = this.rear = -1;
			this.arrQueue.length = 0;
            return item;

		} else {
            const item = this.arrQueue[this.front];
            delete this.arrQueue[this.front];
            this.front++;
            return item;
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


module.exports=Queue;
