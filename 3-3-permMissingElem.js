// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// [The key is the find out the sum of the array WITHOUT a missing element]
// [then compare it to the array you are given]

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    // the key is that the range always starts at 1;
    var realLength = A.length + 1;
    var realCount = 0
    var underCount = 0;
    for(var i = 0; i<= realLength; i++){
        realCount += i
    }
    for(var j = 0; j< A.length; j++){
        underCount += A[j]
    }
    console.log(realCount)
    return realCount - underCount;
}

// this can be simplified to:
// If you are a real nutter you can do XOR operations instead of addition
// to avoid overfloat
function solution(A){
    var runningSum = 0

    for (var i = 0; i < A.length; i++) {
        runningSum += i - A[i] + 1
    };
    return runningSum + A.length+1
}



