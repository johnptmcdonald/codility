function sieve(N){
	// make a new array of 'numbers'
	sieve = new Array(N).fill(true)
	sieve[0] = false;
	sieve[1] = false;

	var i = 2;
	// we only need to go up to i, where i = sqrt(N)
	while(i*i <= N){
		// if we haven't crossed this number off yet...
		if(sieve[i]){
			// we can actually start removing at i^2, 
			// because multiples of i that are less than i^2
			// have already been removed. MATHS!
			var k = i * i
			while(k <= N){
				sieve[k] = false;
				k += i
			}
		}
	i++
	}
	console.log(sieve)
}

sieve(27)