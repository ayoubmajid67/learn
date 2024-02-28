// factorial using recursion :
// big-o=O(n) linear time 
function factorialRecursion(n) {
	// base case :
	if (n == 0) return 1;

	// recursion case :
	return n * factorialRecursion(n - 1);
}
console.log(factorialRecursion(5)); 