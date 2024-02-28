const Queue = require("./cQueue");

class node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class binarySearchTree {
	constructor() {
		this.root = null;
	}

	isEmpty() {
		return this.root == null;
	}
	insert(value) {
		// create new node :
		const newNode = new node(value);

		if (this.isEmpty()) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}
	insertNode(root, newNode) {
		if (this.isEmpty()) return;

		if (newNode.value < root.value) {
			// base case :
			if (root.left == null) {
				root.left = newNode;
			} //recursion case :
			else {
				this.insertNode(root.left, newNode);
			}
		} else {
			// base case :
			if (root.right == null) {
				root.right = newNode;
			} //recursion case :
			else {
				this.insertNode(root.right, newNode);
			}
		}
	}
	search(valueToFind, explore = this.root) {
		if (this.isEmpty()) return false;

		// base case 1:
		if (explore == null) return false;
		// base case 2 :
		if (explore.value == valueToFind) return true;
		// recursion case 1 :
		else if (explore.value > valueToFind) return this.search(valueToFind, explore.left);
		// recursion case 2 :
		else return this.search(valueToFind, explore.right);
	}
	preOrder(explore = this.root) {
		if (this.isEmpty()) console.log("The tree is empty :");

		// base case :
		if (explore == null) return;

		console.log(explore.value);
		// recursion case :
		this.preOrder(explore.left);
		this.preOrder(explore.right);
	}

	inOrder(explore = this.root) {
		if (this.isEmpty()) console.log("The tree is empty :");

		// base case :
		if (explore == null) return;

		this.inOrder(explore.left);
		console.log(explore.value);
		this.inOrder(explore.right);
	}
	postOrder(explore = this.root) {
		if (this.isEmpty()) console.log("The tree is empty :");

		// base case :
		if (explore == null) return;

		this.postOrder(explore.left);
		this.postOrder(explore.right);
		console.log(explore.value);
	}
	levelOrder() {
		if (this.isEmpty()) {
			console.log("The tree is empty : ");
		} else {
			const q = new Queue();
			q.enqueue(this.root);
			while (q.size()) {
				let current = q.dequeue();
				console.log(current.value);
				if (current.left) {
					q.enqueue(current.left);
				}
				if (current.right) {
					q.enqueue(current.right);
				}
			}
		}
	}
	min(explore = this.root) {
		//secure case  :
		if (this.isEmpty()) {
			return "Empty Tree";
		}
		//base case :
		if (!explore.left) return explore.value;
		//recursion case  :
		return this.min(explore.left);
	}

	max(explore = this.root) {
		// secure case  :
		if (this.isEmpty()) {
			return "Empty Tree";
		}
		// base case :
		if (!explore.right) return explore.value;

		//recursion case  :
		return this.min(explore.right);
	}

	delete(value) {
		this.root = this.deleteNode(value);
	}
	deleteNode(value, explore = this.root) {
		if (this.isEmpty()) {
			return this.root;
		}

		if (value < explore.value) {
			explore.left = this.deleteNode(value, explore.left);
		} else if (value > explore.value) {
			explore.right = this.deleteNode(value, explore.right);
		} else {
			if (!explore.left && !explore.right) {
				return null;
			} else if (explore.left && explore.right) {
				explore.value = this.min(explore.right);
				explore.right = this.deleteNode(explore.value, explore.right);
			} else if (explore.left) {
				return explore.left;
			} else {
				return explore.right;
			}
		}

		return explore;
	}
}

let bst = new binarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.levelOrder();
console.log("after Deleted 10: ");
bst.delete(10);
bst.levelOrder();
console.log("PreOrder : ");
bst.preOrder();
console.log("\ninOrder : ");
bst.inOrder();
console.log("\n postOrder");
bst.postOrder();
console.log("Level Order : ");
bst.levelOrder();
let q = new Queue();
