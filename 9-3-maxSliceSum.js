// The probem with this one is negative numbers
// That's why we start with maxSlice = A[0]
// and why the maxEnding is the highest of A[i] and maxEnding + A[i]

function solution(A){
    var maxEnding = A[0];
    var maxSlice = A[0];
    
    for(var i = 1; i < A.length; i++){
        maxEnding = Math.max(A[i], maxEnding + A[i])
        maxSlice = Math.max(maxEnding, maxSlice)
    }
    return maxSlice
}



