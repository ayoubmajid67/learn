//  big-o = O(mn) if m==n O(n^2)
function cartesianProduct(arr1, arr2) {
	let result = [];
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			result.push([arr1[i], arr2[j]]);
		}
	}
	return result;
}
let arr1 = [1, 3];
let arr2 = [5, 4];

let result = cartesianProduct(arr1, arr2);
console.log(result);
