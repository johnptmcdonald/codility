function solution(A){
	var rightwards = [0];
	var leftwards = [0];
	var max = 0
	leftwards[A.length-1] = 0

	// we will run through the array rightwards and leftwards
	// we will keep a running sum in both directions that cannot drop below zero

	for (var i = 1; i < A.length-1; i++) {
		rightwards[i] = (Math.max(0, rightwards[i-1] + A[i]))
	};

	for (var i = A.length-2; i > 0; i--) {
		leftwards[i] = (Math.max(0, leftwards[i+1] + A[i]))
	};

	console.log(rightwards)
	console.log(leftwards)

	// we basically want to eliminate one item in the array
	// so we can run through the leftwards and rightwards arrays
	// each time skipping one. 
	for (var i = 1; i < A.length-1; i++) {
		max = Math.max(max, rightwards[i-1] + leftwards[i+1])
	};
	return max
}

solution([3,2,6,-1,4,5,-1,2])