// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var countersArray = new Array(N);
    countersArray.fill(0);
    // this keeps track of the highest value of any counter
    var maxCounterValue = 0;
    // this keeps track of the minimum value a counter can be
    // (i.e. the value that all counters must be set to)
    var minCounterValue = 0;
    
    for(var i = 0; i < A.length; i++){
        if(A[i] < N + 1){
            if(countersArray[A[i]-1] < minCounterValue){
                countersArray[A[i]-1] = minCounterValue;
            }
            countersArray[A[i]-1]++;
            maxCounterValue = Math.max(maxCounterValue, countersArray[A[i]-1]);
        } else {
            minCounterValue = maxCounterValue;
        }
    }
    
    for(var j = 0; j < countersArray.length; j++){
        if(countersArray[j] < minCounterValue){
            countersArray[j] = minCounterValue;
        }
    }
    
    return countersArray;
}




// 

function solution(N, A) {
    // write your code in JavaScript (Node.js 4.0.0)
    // start with a counter array = []
    counterArray = []
    var currentMax = 0 
    var tempMax = 0

    // loop through A
    for (var i = 0; i < A.length; i++) {

        if(A[i] <= N && counterArray[A[i]-1] === undefined){

            counterArray[A[i]-1] = 0;
            console.log("counter number " + A[i]-1 + " is undefined, so is being set to " + counterArray[A[i]-1] )
        }

        if(counterArray[A[i]-1] < currentMax){
            counterArray[A[i]-1] = currentMax;
        }

        if(A[i] <= N){
            console.log("incrementing " + counterArray[A[i]-1]);
            console.log(counterArray)
            counterArray[A[i]-1]++;

            tempMax = Math.max(tempMax, counterArray[A[i]-1])
            console.log("also updating tempMax to " + tempMax)
        } else {
            currentMax = tempMax;
            console.log("currentMax is being set to " + tempMax)
        }
    }

    console.log("CURRENT MAX IS " + currentMax)
    for (var i = 0; i < N; i++) {
        if(!counterArray[i]){
            counterArray[i] = currentMax
        }
        counterArray[i] = Math.max(currentMax, counterArray[i])
    };
        // if counterArray[i-1] is less than currentMax, set counterArray[i-1] to currentMax
        // if A[i] <= N then increment counterArray[A[i-1]]
            // tempMax = Math.max(tempMax, counterArray[A[i-1]])
    return counterArray
        // if A[i] > N then set currentMax to whatever tempMax is

    // loop through counters, make sure they are all at LEAST at currentMax
}

solution(5,[3,4,4,6,1,4,4]) //=> [3,2,2,4,2]


