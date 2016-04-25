// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var truthArray = [];
    var count = 0
    A.forEach(function(item){
        if(truthArray[Math.abs(item)] === undefined){
            truthArray[Math.abs(item)] = true
            count++
        }
    })
    return count
    
}