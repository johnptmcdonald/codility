// // you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');

function solution(H) {
    var stack = [H[0]]
    var result = 1;

    for(var i = 1; i < H.length; i++){
        var currentHeight = H[i];

        while(stack.length && stack[stack.length - 1] >= currentHeight) {
            if (currentHeight == stack[stack.length - 1]) {
                result--;
            }
            stack.pop();
        }

        stack.push(currentHeight);
        result++;
    }
    return result;
}




solution([8,8,5,7,9,8,7,4,8])
// solution([1,1,1,1,1])

function solution(H) {
    // write your code in JavaScript (Node.js 4.0.0)
    // start count at 1
    // push H[i] onto stack if H[i] > stack.last
    // if H[i] < stack.last:
        // keep popping off stack last until H[i] <= stack.last
    
    var stack = [H[0]];
    // the stack represents the blocks at this intersection
    // so the last item represents the current block
    var count = 0;
    for(var i = 1; i < H.length; i++){

        while(H[i] < stack[stack.length-1]){
            // first off, if this value is lower, then we keep popping off the stack
            // and incrementing
            stack.pop()
            count++
        }
        if(H[i] > stack[stack.length-1] || stack.length === 0){
            // but if it's higher, we push it onto the stack
            stack.push(H[i])
        }

    }
    // we return the count AND the stack length because it's as if the final item in the array is zero
    return count+stack.length
}






























