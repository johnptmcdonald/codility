

function solution(A, B, K){
	//we can't loop through it, or that would be O(n) and we need O(1)

	// so we are basically going to take B-A and see how many times K goes into it.
	// We need to add a few things though, like find where we are going to start.
	// We can start at A (if K divides exactly into A), or we can start at the last
	// number BEFORE A that K could exactly divide into. 
	// If we start at A, then we know that the count is at least 1, so we increment a counter to that effect.
	
	// Then we simply take B - startNum, and see how many times K goes into it.

	var count = 0;
	var startNum;

	if(A % K === 0){
		startNum = A;
		count++
	} else {
		startNum = A - (A % K) // this is the key part! we start at the nearest dividend at or below A
		// we could do at or ABOVE it too, as long as we incremented the count if we start there.
	}
	console.log(startNum)
	return (Math.floor((B-startNum)/K))+count
}

solution(6,11,2)





























