/**
 * 
 * @param {string} sentence 
 * @returns a coded  version of the strin
 */
function hackerSpeak(sentence) {
    let i = 0;
     let codedSentence = '';
    while(i < sentence.length){
      if(sentence[i] === "a") {
              codedSentence += 4;
         }else if (sentence[i] === "i"){
            codedSentence += 1; 
         }else if (sentence[i] === "s"){
            codedSentence += 5; 
         }else if (sentence[i] === "e"){
                 codedSentence += 3;
         }else if (sentence[i] === "o"){
                 codedSentence += 0;
         }else{
                 codedSentence += sentence[i];
         }
      i++;
    }
      console.log(codedSentence);
    }
    
    hackerSpeak("javascript is cool"); //returns "j4v45cr1pt 15 c00l"
    hackerSpeak("programming is fun"); //returns "pr0gr4mm1ng 15 fun"
    hackerSpeak("become a coder"); //returns "b3c0m3 4 c0d3r"