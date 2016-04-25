// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 4.0.0)
    // N = area
    // area = A*B
    // perimeter = 2(A+B)
    // Keep A+B as small as possible
    // divisor must be as close as possible to sqrt(N)
    // easy-peasy, just remember the 'countingDivisors' algo!
    var result = 0
    var i = 1;
    var lastDivisor = 1
    
    while(i*i < N){
        if(N%i === 0){
            result +=2
            lastDivisor = i
        }
        i++
    }
    if(i*i === N){
        result++
        lastDivisor = i
    }
    
    return (lastDivisor + N/lastDivisor)*2
    
}