// big-O= O(2^n)
function towerOfHanoi(n, fromRod, toRod, usingRod) {
	// base case :
	if (n == 1) {
		console.log(`Move disk 1 from ${fromRod} To ${toRod}`);
		return;
	}
	towerOfHanoi(n - 1, fromRod, usingRod, toRod);
	console.log(`Move disk ${n} from ${fromRod} To ${toRod}`);
	towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "C", "B");
