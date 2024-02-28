function checkIfArrIsSortedInAsc(arr) {
	for (let index in arr) {
		if (arr[index] > arr[+index + 1]) return false;
	}
	return true;
}
function checkIfArrIsSortedInDesc(arr) {
	for (let index in arr) if (arr[index] < arr[+index + 1]) return false;
	return true;
}
function checkIfArrSorted(arr) {
	return checkIfArrIsSortedInAsc(arr) || checkIfArrIsSortedInDesc(arr);
}
//  big-O= o(log(n)) logarithmic  time (without considering the check of sort)
function binarySearch(arr, valueToFind) {
	if (!checkIfArrSorted(arr)) return "Invalid Array you should sorted first : \n";
	let left = 0;
	let right = arr.length - 1;
	let mid = (left + right) / 2;

	while (left <= right) {
		if (arr[mid] == valueToFind) return mid;
		if (checkIfArrIsSortedInAsc(arr)) {
			if (arr[mid] < valueToFind) left = mid + 1;
			else right = mid - 1;
		} else {
			if (arr[mid] > valueToFind) left = mid + 1;
			else right = mid - 1;
		}
		mid = Math.floor((left + right) / 2);
	}
	return -1;
}

let arrAsc = [1, 1, 3, 4, 4, 5, 6];
let arrDesc = arrAsc.slice().reverse();
console.log(binarySearch(arrAsc, 1));
console.log(binarySearch(arrDesc, 1));
