



solution([1,2,3,-2,5,-10])

// my original attempt:
function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    // A can be empty
    // return 0 if no profit
    // let's get greedy...
    var maxProfit = 0;
    var min = A[0];
    var max = A[0];
    
    // let's pretend we sell every day, update maxprofit if it is greater
    // but also update min if it is below old min.
    for(var i = 1; i < A.length; i++){
        maxProfit = Math.max(maxProfit, A[i] - min);
        min = Math.min(min, A[i]);
    }
    return maxProfit
}


// my second attempt using the same methodology as in the lesson:
function solution(A){

	// get an array of the differences between each stock price
    var diffArray = [];
    for(var i = 1; i < A.length; i++){
        diffArray.push(A[i] - A[i-1])
    }
    
    // then solve maxSlice on them
    // we just make a running sum that can't go below zero, and keep track of the highest it gets to.
    // we split this into two parts. 
    var maxEnding = 0; // This is a running sum that can't go below zero 
    var maxSlice = 0; // This keeps track of the highest level the running sum got to

    for(var j = 0; j < diffArray.length; j++){
        maxEnding = Math.max(0, maxEnding + diffArray[j])
        maxSlice = Math.max(maxEnding, maxSlice)
    }
    return maxSlice
}


// This is how to get the maxSlice:
// function solution(A){

// 	maxEnding = 0;
// 	maxSlice = 0;
// 	console.log(maxEnding)
// 	console.log(maxSlice)
// 	for (var i = 0; i < A.length; i++) {
// 		// this just adds up as it goes along, but never goes below zero
// 		maxEnding = Math.max(0, maxEnding + A[i])

// 		maxSlice = Math.max(maxSlice, maxEnding)
// 		console.log("maxEnding: " + maxEnding)
// 		console.log("maxSlice: " + maxSlice)
// 	};

// 	return maxSlice

// }