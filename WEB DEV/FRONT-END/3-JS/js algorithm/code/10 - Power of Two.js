function isPowerOfTwo(n) {
	if (n < 1) return false;

	return Boolean((n & (n - 1)) == 0);

	/*
2^3 : 8 , 7  
    1000  n
    0111  n-1
    ------
    0000   power of two 

but 9 , 8 
    1001 n 
    1000 n -1 
    -----
    1000 != 0000 not power of two 

*/
}

console.log(isPowerOfTwo(7));
