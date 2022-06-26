debugger;
let rem = 0,
  sum = 0;

function mean(num) {
  while (num > 0) {
    rem = num % 10; //vor vercni verjin tiv@
    sum = sum + rem; //gumari sum-in
    num = num / 10; //hani ayd verjin tiv@
  }
}

console.log(mean(561));
