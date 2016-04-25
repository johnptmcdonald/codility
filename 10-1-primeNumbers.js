function countingDivisors(n){
	var i = 1;
	var result = 0;

	while(i * i < n){

		if(n % i === 0){
			result += 2
		}
		i++
	}
	if(i * i === n){
		result++
	}
	return result
}

function primality(n){
	var i = 2;

	while(i * i <= n){
		if(n % i === 0){
			return false
		}
		i++
	}
	return true
}


function findFib(n){
	fib = [0,1]
	for(var i = 2; i <= n; i++){
		fib[i] = fib[i-1] + fib[i-2]
	}
	console.log(fib)
}

findFib(10)