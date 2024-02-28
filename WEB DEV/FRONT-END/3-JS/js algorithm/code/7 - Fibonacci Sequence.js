//time complexity :   O(n) linear time  
function fibonacci(n) {
	const fib = [0, 1]; 

	for (let i = 2 ; i < n; i++) {  
		fib[i] = fib[i - 2] + fib[i - 1];
	}

	return fib; // 1   
}

console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));

// stop 8 : 
