// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var onesCount = 0;
    var totalSum = 0;
    
    for(var i = A.length-1; i >= 0; i--){
        if(A[i] === 1){
            onesCount++;
        } else {
            totalSum += onesCount;
        } 
        if(totalSum > 1000000000){
            return -1;
        }
    }
    return totalSum;
}




























