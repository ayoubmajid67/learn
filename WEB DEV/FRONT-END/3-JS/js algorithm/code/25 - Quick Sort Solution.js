// worst case  O(n^2) 
// avg case = O(nlog(n))
function quickSort(arr) {
	// base case :
	if (arr.length < 2) return arr;

	let pivot = arr[arr.length - 1];
	let left = [];
	let right = [];

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) left.push(arr[i]);
		else right.push(arr[i]);
	}

	//recursion case :
	return [...quickSort(left), pivot, ...quickSort(right)];
}
debugger;
const arr = [8, 20, -2, 4, -6];
console.log(quickSort(arr));
