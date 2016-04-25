
function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    A = A.sort(function(a,b){
        return a-b;
    });

    // find three numbers, where each one has to be less than
    // the sum of the other two

    // The key is realizing that they must be consecutive, in a sorted array.

    for(var i = 0; i <= A.length-3; i++){
    	if(A[i] + A[i+1] > A[i+2]){
    		if(A[i+1] + A[i+2] > A[i]){
    			if(A[i] + A[i+2] > A[i+1]){
    				return 1
    			}
    		}
    	}
    }
    return 0
}

///////


function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    // A = [10,2,5,1,8,20] ==> 1, triplet!
    // A= [10,50,5,1] ==> 0, No triplets!
    // A can be empty, zero and/or negative
    // P, Q, and R must be next to each other
    // sort the array, check each triplet in turn 
    // no need to remove dupes, idiot.
    
    A = A.sort(function(a,b){
        return a - b;
    })
    

    for(var j = 0; j < A.length-2; j++){
        var P = j, Q = j+1, R = j+2;
        if(A[P] + A[Q] > A[R] &&
           A[Q] + A[R] > A[P] &&
           A[R] + A[P] > A[Q]
        ){
            return 1;
        }
    }
    return 0;
}