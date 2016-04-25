
// this one was hard....
// The key is to scan through the string and keep a prefix sum of the 'A's, 'C's, 'G's, and 'T's as you go through. 
// You effectively have an array of arrays.
// Each sub-array (in the form [0,0,0,0]) is a count of A,C,G,T in the string up to and including that point.
// When we get a query of two numbers, e.g. 2, 4, we compare the prefix count at 4 
// (which includes all the counts up to and including the 4th letter in the string)
// with the prefix count at 1 (up to and including the 1st letter in the string)
// We used 1 instead of 2, so that any changes in the count are due to the 2nd, 3rd, and 4th letter only. 

function solution(S, P, Q){

	var prefixSums = [[0,0,0,0]];
	var currentPrefixSum;
	var minImpact;
	var outputArray = [];

	for(var i = 0; i < S.length; i++){
		currentPrefixSum = prefixSums[i].concat() // create a local copy, because stupid arrays are copy by REFERENCE!
		if(S[i] === "A"){
			currentPrefixSum[0]++;
		} else if(S[i] === "C"){
			currentPrefixSum[1]++;
		} else if(S[i] === "G"){
			currentPrefixSum[2]++;
		} else {
			currentPrefixSum[3]++;
		}
		prefixSums.push(currentPrefixSum)
	}


	for(var j = 0; j < P.length; j++){
		for(var k = 0; k < 4; k++){
			if(prefixSums[Q[j]+1][k] - prefixSums[P[j]][k] !== 0){
				minImpact = k+1;
				break;
			}
		}
		outputArray.push(minImpact)
	}

	return outputArray
}


solution("ACGTCCG", [2,5,0], [4,5,6])

// I think this is slightly easier to read ans there is no double loop:

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 4.0.0)
    // A = 1, C = 2, G = 3, T = 4;
    // S = "CAGCCTA";
    // P = [2,5,0];
    // Q = [4,5,6];
    
    // loop through S, at each point record how many of each type up to that point.
    // i.e. prefix sum for each nucleotide;
    var outputArray = [];
    var prefixSums = [[0,0,0,0]];
    var A = 0, C = 0, G = 0, T = 0; 
    for(var i = 0; i < S.length; i++){
        switch(S[i]){
            case 'A': A++; break;
            case 'C': C++; break;
            case 'G': G++; break;
            case 'T': T++; break;
        }
        prefixSums.push([A,C,G,T]);
    }
    
    for(var j = 0; j < P.length; j++){
        if(prefixSums[Q[j]+1][0] - prefixSums[P[j]][0] !== 0){
            outputArray.push(1)
        } else if(prefixSums[Q[j]+1][1] - prefixSums[P[j]][1] !== 0){
            outputArray.push(2)
        } else if(prefixSums[Q[j]+1][2] - prefixSums[P[j]][2] !== 0){
            outputArray.push(3)
        } else {
            outputArray.push(4)
        }
        //compare prefixSums at Q[j]+1 with those at P[j], so that things like solution("AT",[0,1],[0,1])
        // returns [1,4], i.e. when comparing a spot to itself, you just return the value of the letter there.
    }
      
    return outputArray;
}


