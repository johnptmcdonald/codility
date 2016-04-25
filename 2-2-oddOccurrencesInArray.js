

function solution(A) {
    // crazy XOR!
    var odd;
    for(var i = 0; i < A.length; i++){
        odd ^= A[i];
    }
    return odd;
}

// X^X=0, and 0^Y=Y
// thus X^X^Y = Y
// thus X^Y^X = Y
// thus A^B^C^A^C = C




