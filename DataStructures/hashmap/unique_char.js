// Check if all characters in a string are unique using an object as a hashtable.

function check_unique(str) {
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    if (!hash[str[i]]) hash[str[i]] = 1;
    else hash[str[i]] += 1;
  }
  return Object.values(hash).every((value) => value === 1);
}

console.log(check_unique("helo"));
