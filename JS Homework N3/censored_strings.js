function uncensor(str, vowels) {
	let i=0;
	let sol = ""
	for(let s of [...str]){
		if(s == "*"){
			sol += vowels[i];
			i++;
		}else{
			sol+=s
		}
	}
	return sol;
}
console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"))
