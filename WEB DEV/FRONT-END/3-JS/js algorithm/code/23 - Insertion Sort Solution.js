// big-O=O(n^2) quadratic time 
function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let numberToInsert = arr[i];
		let positionToInsert = i;

		for (let j = i - 1; j >= 0; j--) {
			if (arr[j] > numberToInsert) {
				arr[j + 1] = arr[j];
				positionToInsert = j;
			}
		}
		arr[positionToInsert] = numberToInsert;
	}
}

let notSortedArray = [5, 2, 3, 1, 4];

insertionSort(notSortedArray);
console.log(notSortedArray);
