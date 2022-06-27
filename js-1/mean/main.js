let rem = 0,
  sum = 0,
  count = 0;

function mean(num) {
  while (num != 0) {
    rem = num % 10;
    sum = sum + rem;
    num = (num - rem) / 10;
    ++count;
  }
  console.log(sum / count);
}
mean(4565);
