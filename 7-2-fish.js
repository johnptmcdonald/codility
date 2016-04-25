// function solution(A, B) {
//     // write your code in JavaScript (Node.js 4.0.0)
//     var upstreamers = [];
//     var alive = A.length;

//     for(var i = 0; i < A.length; i++){
//     	if(B[i] === 1){
//     		// pushing upstreamer onto stack
//     		upstreamers.push(A[i])
//     		console.log("pushing onto the upstreamers: " + upstreamers)
//     	} else {
//     		// else it must be an downstreamer, and needs to do battle with all the upstreamers
//     		// that are before it 
//     		console.log(A[i] + " is a downstreamer, comparing him to the last upstreamer, which is " + upstreamers[upstreamers.length-1] + ". Upstreamers is currently " + upstreamers)
//     		for(var j = upstreamers.length - 1; j >= 0; j--){
//     			console.log(j)
//     			console.log("comparing " + A[i] + " with " + upstreamers[j])
//     			if(A[i] < upstreamers[j]){
//     				console.log("downstreamer dies")
//     				alive--;
//     				break;
//     			} else {
//     				console.log("upstreamer dies!")
//     				upstreamers.pop();
//     				console.log("upstreamers is now " + upstreamers)
//     				alive--;
//     			}
//     			console.log(upstreamers)
//     		}
//     	}
//     }
//     return alive

// }

solution([4,3,2,1,5,7],[0,1,0,1,0, 0])


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 4.0.0)
    // A (size) and B (direction) cannot be empty
    // 0 means upstream
    // 1 means downstream
    var zeroStack = [];
    var count = 0;
    for(var i = B.length - 1; i >=0; i--){
        if(B[i] === 0){
            zeroStack.push(A[i]);
        }
        if(B[i] === 1){
            while(A[i] > zeroStack[zeroStack.length-1]){
                zeroStack.pop();
                count++;
            }
            if(zeroStack.length !== 0){
                count++
            }
        }

      } 
    return B.length - count
}

























