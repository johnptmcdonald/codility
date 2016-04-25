// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    var count = 0;
    // write your code in JavaScript (Node.js 4.0.0)
    A = A.sort(function(a,b){
        return a - b;
    });
    


    for(var i = 1; i <= A.length; i++){
        if(A[i] !== A[i-1]){
            count++;
        }
    }
    
    return count;
}



function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    // A can be empty, and can have zeroes and negatives
    // A = [2,1,1,2,3,1] => 3
    // A = [1,1,1,2,2,3]
    // i.e. it returns the number of distinct values in the array
    var count = 0
    

    
    A = A.sort(function(a,b){
        return a - b;
    })
    
    for(var i = 0; i < A.length; i++){
        if(A[i+1] !== A[i]){
            count++
        }
    }
    
    if(A.length === 1){
        count = 1;
    }
    return count;
}