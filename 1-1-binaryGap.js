

function solution(N) {
    var isCounting = false;
    var count = 0;
    var highestCount = 0;
    var bin = N.toString(2);
    
    for(var i=0; i<bin.length; i++){
        if(bin[i] === "1"){
            isCounting = true;
        }
        if(bin[i] === "0" && isCounting && bin[i] !== bin[bin.length]){
            count += 1;
        }
        
        if(bin[i] === "1"){
            if(count > highestCount){
                highestCount = count;
            }
            count = 0;
        }   
    }
    return highestCount;
}