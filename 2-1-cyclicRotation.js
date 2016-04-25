// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


function solution(A, K) {
    // write your code in JavaScript (Node.js 4.0.0)
    if(A.length === 0) {
        return A
    }
    for(var i = 0; i < K; i++){
        A.unshift(A.pop());
    }
    return A;
}






































