// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// [First I went through the whole array and got the total]
// [Then, I went through the array again, adding up the leftCount as I went, and subtracting each item from the total count]
// [This effectively gave me a left and a right total I could compare, and then Math.abs]

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var min;
    var tempMin;
    var leftCount = 0;
    var count = 0;
    for(var i = 0; i<A.length; i++){
        count += A[i];
    }
    
    for(var j = 0; j<A.length-1; j++){
        count -= A[j];
        leftCount += A[j];
        tempMin = count - leftCount;
        if(Math.abs(tempMin) < min || min === undefined){
            min = Math.abs(tempMin);
        }
    }
    return min;
}




function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    // 10,9,7,4,0
    // should return the minimal difference
    
    // run up and down the array

    var upwardSums = [];
    var downwardSums = [];
    var upwardSum = 0;
    var downwardSum = 0;
    var min;
    var diff;

    for (var i = 0; i < A.length-1; i++) {
        upwardSum += A[i]
        downwardSum += A[A.length-1-i]

        upwardSums.push(upwardSum)
        downwardSums.push(downwardSum)
    }

    min = Math.abs(upwardSums[0] - downwardSums[upwardSums.length-1])
  
    // now compare the two:
    for (var i = 0; i < upwardSums.length; i++) {
        diff = Math.abs(upwardSums[i] - downwardSums[upwardSums.length-i-1])
        min = Math.min(min, diff)
    };

    console.log(upwardSums, downwardSums)
    return min
}

solution([3,1,2,4,3])






























