// THIS IS NOT MY CODE!
// COME BACK TO THIS TO UNDERSTAND IT!

function solution(A) {
    var longitud = A.length;
    var peaks = [];
    var current = 0;
    for (i=1; i<longitud-1; i++){
        if((A[i-1]<A[i]) && (A[i]>A[i+1])){//here we get the index of the peak numbers
            peaks.push(i);
        }
    }
    for(i=0;i<longitud;i++){
        k=i+1; //here we get the number of block in which we will divide the array
        bloque=0; // here specify the current block
        leng=longitud/k; // here is the number of element in each block
        if(longitud%k===0){ // if we can have the same number of element in each block we continue
            for(j=0;j<peaks.length;j++){ //here we record each  peak
                if(Math.floor(peaks[j]/leng)===bloque){ // if we found one peak in the current block we increase to the next block in order to check it
                    bloque += 1;
                }
            }
            if(bloque===k){ // if there is one element in each block we update the variable current.
                current = k;
            }
        }
        
    }
    return current;
}
