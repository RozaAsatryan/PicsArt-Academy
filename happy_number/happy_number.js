function isHappy(n) {
  let sum = 0;
  while (n > 0) {
    let i = n % 10;
    n = Math.trunc(n / 10);
    sum += i * i;
  }
  if (sum === 1) {
    return true;
  } else if (sum > 1 && sum <= 4) {
    return false;
  }
  return isHappy(sum);
}

// Second solution

function sumNum(num) {
  return num
    .toString()
    .split("")
    .reduce(function (sum, i) {
      return +sum + Math.pow(i, 2);
    });
}

function isHappy(n) {
  let i = sumNum(n);
  if (i === 1) {
    return true;
  } else if (i > 1 && i <= 4) {
    return false;
  }
  return isHappy(i);
}
console.log(isHappy(67));
