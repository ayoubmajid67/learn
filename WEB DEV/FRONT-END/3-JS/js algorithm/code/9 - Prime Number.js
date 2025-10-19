function isPrime(n) {
	if(Number<2) return false;
	for (let i = 2; i <= n / 2; i++)  if (n % i == 0) return false;
	return true;
}
