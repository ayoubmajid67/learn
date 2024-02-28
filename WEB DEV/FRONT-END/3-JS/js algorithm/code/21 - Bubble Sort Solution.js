function swap(v1, v2) {
	return [v2, v1];
} 
// big-O=O(n^2) quadratic time 
function bubbleSort(arr) {
	let isSwapped = false;

	for (let i = 0; i <= arr.length; i++) {
		isSwap = false;
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				isSwap = true;
				[arr[j], arr[j + 1]] = swap(arr[j], arr[j + 1]);
			}
		}
		if (!isSwapped) return;
	}
}

let notSortedArray = [5, 2, 3, 1, 4];

bubbleSort(notSortedArray);
console.log(notSortedArray);
