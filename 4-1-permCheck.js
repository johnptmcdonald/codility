// [The key here is to make a counting array]
// [This counting array simply counts the number of occurrences of each number]
// [So countArray[0] would hold the number of zeroes in the number, countArray[1] would hold the number of ones, etc.]

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var countArray = [];
    
    for(var i = 0; i<A.length; i++){
        if(countArray[A[i]]){
            countArray[A[i]] += 1;
        } else {
            countArray[A[i]] = 1
        }
    }
    for(var j = 1; j < countArray.length; j++){
        if(countArray[j] !== 1){
            return 0
        }
    } 
    return 1
}



function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    // make new truthArray = [];
    var truthArray = [];


    
    // loop through array A, 
        // for each currentValue, put that in the truth array, such that the item's index is the currentValue 
    for (var i = 0; i < A.length; i++) {
        var currentValue = A[i];
        if(truthArray[A[i]] === undefined){
            truthArray[A[i]] = 1
        } else {
           truthArray[A[i]]++ 
        }
    }

    for (var i = 1; i < truthArray.length; i++) {
        if(truthArray[i] !== 1){
            return 0
        }
    }

    return 1
    // then try and loop through the truthArray

}

solution([1,2,3,3])

