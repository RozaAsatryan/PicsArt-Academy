function numLeapYears (str) {
  let count = 0
  let dates = str.split("-")
  for (let i = +dates[0]; i <= +dates[1]; i++) {
      if(new Date(i, 1, 29).getMonth() === 1) {
          count++
      }
  }
  return count
}
console.log(numLeapYears("1600-2000"))

//-----------------------------------------//


function numLeapYears(years) {
    let y = years.split("-");
    let first = +y[0];
    let last = +y[1];
    let num = 0;
    
    for (let i = first; i <= last; i++) {
      if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
        num++;
      }
    }
    return num;
  }
  console.log(numLeapYears("1980-1988"));
