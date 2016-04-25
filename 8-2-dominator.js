function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    // A can be empty
    // so... dominator is same as leader?
    // find the leader in O(n)
    // loop through the array and grab index each time the leader occurs
    
    var leaderStack = [];
    var leaderCandidate;
    var leaderCount = 0;
    var result;
    
    for(var i = 0; i < A.length; i++){
        if(leaderStack.length === 0){
            leaderStack.push(A[i])
        } else if(A[i] === leaderStack[leaderStack.length-1]){
            leaderStack.push(A[i])
        } else{
            leaderStack.pop()
        }
    }
    
    leaderCandidate = leaderStack[0];

    
    for(var j = 0; j < A.length; j++){
        if(A[j] === leaderCandidate){
            leaderCount++
            // actually, instead of looping through the array, we'll just assign the index to the result here
            // if the leaderCandidate is the real leader, then we can just use this result.
            result = j;
        }
    }
    
    if(leaderCount > Math.floor(A.length/2)){
        return result
    } else {
        return -1;
    }
    
    
}
