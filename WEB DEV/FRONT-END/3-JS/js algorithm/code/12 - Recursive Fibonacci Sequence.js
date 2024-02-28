// o(n) : linear time 
function fibonacciOptimized(n, counter = 0, perviousValue = 0, value = 0) {
	if (counter == 1) {
		value = 1;
		perviousValue = 0;
	}
	//base case :
	if (counter == n) return value;

	return fibonacciOptimized(n, ++counter, value, perviousValue + value);
}
// o(2^n)  
function fibonacci(n) {
	//base case :
	if (n <= 0) return 0;
	if (n == 1) return 1;

	//recursion case :
	return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacciOptimized(40));
console.log(fibonacci(40));
