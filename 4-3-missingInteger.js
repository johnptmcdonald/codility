// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var truthArray = new Array(A.length+1);
    
    for(var i = 0; i < A.length; i++){
        truthArray[A[i]] = true;    
    }

    for(var j = 1; j < truthArray.length+1; j++){
        if(truthArray[j] === undefined){
            return j
        }
    }
    
}




function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    // make a truthArray = [];
    var truthArray = []
    // loop through A
    for (var i = 0; i < A.length; i++) {
        truthArray[A[i]] = true;
    };
        // stick it in the truth array (swap values for indices)

    for (var j = 1; j <= truthArray.length; j++) {
        if(!truthArray[j]){
            return j
        }
    };
    // loop through truthArray, break when you hit undefined
    return 1
}

solution([1,3,6,4,1,2]) // => 5













