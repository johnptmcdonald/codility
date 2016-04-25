// The index minus it's value gives the leftmost point of a disc
// Loop through the array - Get left most part of each discs, Get the rightmost part of each disc
// Loop through the new left/right disc array, that has been sorted by leftness.
// Take the first disc and count how many discs have a left edge that is BETWEEN the current disc's left edge and right edge
// Increment the count for every left edge you find.
// now move onto the next disc and do the same, and so on.

// This looks like it should be O(n^2) but codility calculates it as O(n log(n))


function solution(A){
	var discs = [];
	var count = 0;

	for(var i = 0; i < A.length; i++){
		discs.push([i-A[i],i+A[i]])
	}

	discs = discs.sort(function(a,b){
		return a[0] - b[0]
	})

	for(var i = 0; i < discs.length; i++){
		currentDisc = discs[i];
		for(var j = i+1; j < discs.length; j++){
			if(discs[j][0] <= currentDisc[1]){
				count++;
				if(count > 10000000){
					return -1;
				}
			} else {
				break;
			}
		}
	}
	return count
}

solution([1,5,2,1,4,0])



