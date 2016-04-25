// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {

    // equi-leaders must have a leader that is the same as the overall leader? YES!
    // That's the key. So we'll first get the overall leader in O(n) using a stack
    
    // get overall leader
    var leaderStack = [];
    var potentialLeader;
    var leader;
    var count = 0;
    var leaderCount = 0;
    var leaderCounts = [];
    var result = 0;
    
    for(var i = 0; i < A.length; i++){
        if(leaderStack.length === 0){
            leaderStack.push(A[i]);
        } else if(A[i] !== leaderStack[leaderStack.length - 1]){
            leaderStack.pop();
        } else {
            leaderStack.push(A[i]);
        }
    }
    
    potentialLeader = leaderStack[0]
    for(var j = 0; j < A.length; j++){
        if(A[j] === potentialLeader){
            count++
        }
    }

    if(count > Math.floor(A.length/2)){
        leader = potentialLeader;
    } else {
        return 0
    }
    
    console.log(leader)
    // great, now we have the leader!
    // Now for the tricky part...
    // I'm going to iterate again and get the prefix sum of counts of the leader
    // we could have done it the first time we looped through the array when we calculated 
    // the leader, but for ease of explanation, we're breaking it down into simple, sequential steps

    for(var k = 0; k < A.length; k++){
        if(A[k] === leader){
            leaderCount++;
        }
        leaderCounts.push(leaderCount)
    }
    // ok, now we have our counts
    // for each point in the array, we are determining if the left portion has the leader
    // and then we are looking to see if the right portion has the leader
    // if they both have the leader, then we will increment the result. 

    for(var m = 0; m < leaderCounts.length; m++){
    	var leftLeader = false;
    	var rightLeader = false;

    	// does the left have a leader?
    	if(leaderCounts[m] > Math.floor((m+1)/2)){
    		leftLeader = true

    	}
    	console.log("leftLeader " + leftLeader)
    	// does the right have a leader?
    	console.log(leaderCounts[leaderCounts.length-1] + " - " + leaderCounts[m] + " > " + Math.floor((leaderCounts.length-1-m)/2) + " ?")
    	if((leaderCounts[leaderCounts.length-1] - leaderCounts[m]) > Math.floor((leaderCounts.length-1-m)/2)){
    		rightLeader = true
    	}
    	console.log("rightLeader" + rightLeader)

    	if(leftLeader && rightLeader){
    		result++
    	}
    }

    return result;
}


