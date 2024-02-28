// solve the problem of factorial  :
function factorial(n) {
	if (n == 0 || n == 0) return 1;
	let fact = 1;

	for (let i = 2; i <= n; i++) {
		fact *= i;
	}
	return fact;
}
function factorialRecursion(n) {
	// base case :
	if (n == 1 || n == 0) return 1;

	// recursion case :
	return n * factorialRecursion(n - 1);
}

console.log(factorial(5));
console.log(factorialRecursion(5));
