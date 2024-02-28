class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.last = null;
		this.size = 0;
	}

	isEmpty() {
		return this.head === null;
	}

	append(value) {
		let newNode = new Node(value);
		if (this.isEmpty()) {
			this.head = this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.size++;
	}

	prepend(value) {
		let newNode = new Node(value);
		if (this.isEmpty()) {
			this.head = this.last = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.size++;
	}

	insert(value, index) {
		if (index < 0 || index > this.size) {
			console.log(`Invalid index. It should be between [0, ${this.size}]`);
			return;
		}
		let newNode = new Node(value);
		if (index === 0) {
			this.prepend(value);
		} else if (index === this.size) {
			this.append(value);
		} else {
			let prev = this.head;
			for (let i = 0; i < index - 1; i++) {
				prev = prev.next;
			}
			newNode.next = prev.next;
			prev.next = newNode;
			this.size++;
		}
	}
  removeFromFront(){
    if(this.isEmpty()){
        console.log("the linked list is empty "); 
        return false;  
    }

    this.head = this.head.next;
    if (this.head === null) {
        this.last = null;
    }
    this.size--;
    return true; 
  }
	remove(value) {
		if (this.isEmpty()) {
			console.log("The linked list is empty.");
			return false;
		}
		if (this.head.value === value) {
		return this.removeFromFront(); 
		
		}
		let current = this.head;
		while (current.next !== null) {
			if (current.next.value === value) {
				current.next = current.next.next;
				if (current.next === null) {
					this.last = current;
				}
				this.size--;
				return true;
			}
			current = current.next;
		}
		console.log("Value not found.");
		return false;
	}

	contains(value) {
		let current = this.head;
		while (current !== null) {
			if (current.value === value) {
				return true;
			}
			current = current.next;
		}
		return false;
	}
	reverse() {
		let prev = null;
		let current = this.head;
		while (current) {
			let next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}
		this.head = prev;
	}

	print() {
		if (this.isEmpty()) {
			console.log("The linked list is empty.");
			return;
		}
		let content = "";
		let current = this.head;
		while (current !== null) {
			content += current.value + " ";
			current = current.next;
		}
		console.log(content);
	}
	getReverseList(l = new LinkedList(), current = this.head) {
		// base case :
		if (current == null) {
			return;
		}

		// recursion case :
		this.getReverseList(l, current.next);
		l.append(current.value);
		if (current == this.head) return l;
	}
	getReverseListIterative() {
		// Create a new instance of LinkedList to store the reversed list
		let reversedList = new LinkedList();

		// Traverse the original list from head to tail
		let current = this.head;
		while (current !== null) {
			// Insert each node's value at the beginning of the reversed list
			reversedList.prepend(current.value);
			current = current.next;
		}

		// Return the reversed list
		return reversedList;
	}
    getSize(){
        return this.size; 
    }
}

let l = new LinkedList();

l.append(10);
l.append(15);
l.append(20);
l.append(25);
l.prepend(2);
l.reverse();
console.log("is  2 exists in the list  : ", l.contains(2));
console.log("is -2 exists in the list : ", l.contains(-2));
console.log("\noriginal list : ");
l.print();

console.log("First Method : ");
l.getReverseList().print();
console.log("\nsecond  Method : ");
l.getReverseListIterative().print();
