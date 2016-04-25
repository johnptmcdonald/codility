
// [The important part is to use a countArray to hold two pieces of info - the position of the fallen leaf (denoted by the index), and the time it fell (denoted by the value)]
// [Then, iterate through the countArray up to position X. If any of those items is undefined, it means a leaf didn't fall there, so you should return -1]
// [If you can get up to countArray[X] without hitting an undefined, you need to check when the last leaf dropped, i.e. the max value up to that point]

function solution(X, A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var countArray = [];
    var max = 0;
    
    for(var i = 0; i < A.length; i++){
        if(!countArray[A[i]]){
            countArray[A[i]] = i
        }
    }
    
    for(var j = 1; j <= X; j++){
        if(countArray[j] === undefined){
            return -1
        } 
        if(countArray[j] > max){
            max = countArray[j]
        }
    }
    return max
}


// this uses a while loop inside a for loop, so not great:

function solution(X, A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var leafArray = [];
    var currentLeaf = 0;

    //loop through A
    for (var i = 0; i < A.length; i++) {
        leafArray[A[i]] = true;

        while(currentLeaf < X && leafArray[currentLeaf+1] === true){
            currentLeaf++;
        }
        if(currentLeaf === X){
            return i
        }

    };

}


solution(5, [1,3,1,4,2,3,5,4])





























