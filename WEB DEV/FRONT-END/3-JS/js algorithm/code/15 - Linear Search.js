// big-o=O(n) linear  time
function linearSearch(arr, numberToSearch) {
	for(let index in  arr){ 
		if (arr[index] == numberToSearch) return index;
	}
	return -1;
}

let arr=[1,2,3,4,5,6,7,8,9,10]; 
console.log(linearSearch(arr,12)); 

a