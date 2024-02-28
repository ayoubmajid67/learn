//big-O=log(n)
function binarySearch(arr, valueToFind, left = 0, right = arr.length - 1) {
// base case :
	if (left > right) return -1;
// recursion case :
	let mid = Math.floor(left + right) / 2;
	if ((mid = valueToFind)) return mid;
	if (arr[mid] > valueToFind) binarySearch(arr, valueToFind, left, right - 1);
	else binarySearch(arr, valueToFind, left + 1, right);
}

let arr = [1, 1, 3, 4, 4, 5, 6];
console.log(binarySearch(arr, 1));
