// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// this solution rests upon the fact that the minimal slice 
// must be either 2 or 3 elements long.

function solution(A) {
	// we are going to keep track of the average minimum
    var runningMin = (A[0] + A[1])/2;
    var currentMin;
    var index = 0
    
    for(var i = 1; i < A.length - 1; i++){
    	// first, we'll run through and get the averages of Two:
        currentMin = (A[i] + A[i+1])/2;
        
        // If the current average of Two is smaller that the running smallest average of two,
        // then we'll set our running Minimum to it, and remember the index.
        if(currentMin < runningMin){
            runningMin = currentMin;
            index = i;
        }


        // I like this bit - we're going to use the same loop to calculate the average of three, but only if there are three numbers to calculate it from:
        if(A[i+2]){
            currentMin = (A[i] + A[i+1] + A[i+2])/3;
            // we can use the same runningMin as before, obv.
            if(currentMin < runningMin){
                runningMin = currentMin;
                index = i;
            }
        }
    }
    return index;
}


//////

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    // smallest average has to be in a slice of 2 or 3;
    // so just loop through and calculate all the slices' averages?
    // is there a better way? Nope...
    var minAvg = (A[0] + A[1])/2;
    var minIndex = 0;
    
    for(var i = 0; i < A.length-2; i++){
        var oldMinAvg = minAvg;
        minAvg = Math.min((A[i] + A[i+1])/2, (A[i]+A[i+1]+A[i+2])/3, oldMinAvg);
        if (minAvg !== oldMinAvg) {
            minIndex = i;
        }
    }

    if((A[A.length-1] + A[A.length-2])/2 < minAvg){
        return A.length-2
    } else {
        return minIndex;
    }
}

solution([4,2,2,5,1,5,8])