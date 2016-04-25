
function solution(N) {
    // write your code in JavaScript (Node.js 4.0.0)
    // number of divisors of N
    count = 0;
    
    var i = 1;
    while(i * i < N){
        if(N%i === 0){
            count += 2
        }
        i++
    }
    if(i*i === N){
        count++    
    }
    return count
}