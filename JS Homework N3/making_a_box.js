/**
 * 
 * @param {number} n 
 * function that creates a box based on dimension n.
 */
function makeBox(n) {
    let Box = [];
    for (i=0;i < n;i++) {
        Box.push("");
        if (i == 0 || i == n - 1) {
            for (square=0;square < n;square++) {
                Box[i] += "#";
            }
        } else {
            for (k=0;k < n;k++) {
                if (k == 0 || k == n - 1) {
                    Box[i] += "#";
                } else {
                    Box[i] += " ";
                }
            }
        }
    }

    return Box
}

console.log(makeBox(3));
console.log(makeBox(5));
console.log(makeBox(7));

