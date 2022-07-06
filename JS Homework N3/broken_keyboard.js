function findBrokenKeys(correctSen, wrongSen) {
	arr=[];
	for (i=0; i<correctSen.length; i++){
			if (correctSen[i]!=wrongSen[i]) {
					arr.push(correctSen[i]);
			}  
	}
	return Array.from(new Set(arr));
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday"))