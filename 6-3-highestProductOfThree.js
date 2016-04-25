// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Codility requires an O(n log(n)) solution, but this is a more efficient O(n) solution 
// - as I learned from the great, but hard, www.interviewCake.com 
// (but the codility test results still detect an O(n log(n)) solution.

function solution(A) {
    var highest = Math.max(A[0], A[1]);
    var lowest = Math.min(A[0], A[1]);
    var highestProductOfTwo = A[0] * A[1];
    var lowestProductOfTwo = A[0] * A[1];
    var highestProductOfThree = A[0] * A[1] * A[2];
    
    // Your HAVE to start at i = 2;
    for(var i = 2; i < A.length; i++){
        highestProductOfThree = Math.max(highestProductOfThree, highestProductOfTwo*A[i], lowestProductOfTwo*A[i]);
        
        highestProductOfTwo = Math.max(highestProductOfTwo, highest*A[i], lowest*A[i]);
        lowestProductOfTwo = Math.min(lowestProductOfTwo, lowest*A[i], highest*A[i]);
        console.log("lowestProductOfTwo:" + lowestProductOfTwo, "highestProductOfTwo: " + highestProductOfTwo)

        highest = Math.max(highest, A[i]);
        lowest = Math.min(lowest, A[i]);
        console.log("lowest:" + lowest, "highest: " + highest)
    }

    return highestProductOfThree
}

solution([-1,-3,-10,10])