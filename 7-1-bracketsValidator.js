
function solution(S) {
    // write your code in JavaScript (Node.js 4.0.0)
    // make a stack for each bracket type
    // push open squares onto square, pop off close squares

    var stack = [];

    for (var i = 0; i < S.length; i++) {
    	if(S[i] === "["){
    		stack.push(S[i]);
    	}
        if(S[i] === "("){
    		stack.push(S[i]);
    	}
    	if(S[i] === "{"){
    		stack.push(S[i]);
    	}

    	if(S[i] === "]"){
    		if(stack[stack.length-1] === "["){
    			stack.pop();
    		} else {
    			return 0
    		}
    	}

        if(S[i] === ")"){
    		if(stack[stack.length-1] === "("){
    			stack.pop();
    		} else {
    			return 0
    		}
    	}

    	if(S[i] === "}"){
    		if(stack[stack.length-1] === "{"){
    			stack.pop();
    		} else {
    			return 0
    		}
    	}
    };

    if(stack.length !== 0){
    	return 0
    }

    return 1;

}

solution("")

function solution(S) {
    // write your code in JavaScript (Node.js 4.0.0)
    // can only pop off the stack when the closer is the complement of the top of the stack
    var stack = [];
    var openers = ["(", "{", "["];
    var closers = [")", "}", "]"];
    var currentBracket;
    
    for(var i = 0; i < S.length; i++){
        currentBracket = S[i];
        if(openers.indexOf(currentBracket) > -1){
            stack.push(currentBracket);
        } else {
            if(openers.indexOf(stack[stack.length-1]) === closers.indexOf(S[i])){
                stack.pop()
            } else {
                return 0
            }
            
        }
    }
    
    if(stack.length !== 0){
        return 0
    }
    return 1
}
