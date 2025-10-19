// big-o = o(n^2)
function climbingStairCase(n) {
	// Secure case :
	if (n < 1) return 0;

	// base case :
	if (n == 1) return 1;
	if (n == 2) return 2;

	//recursion case :
	return climbingStairCase(n - 1) + climbingStairCase(n - 2);
}

console.log(climbingStairCase(3));