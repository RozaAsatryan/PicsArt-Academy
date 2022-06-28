/**
 * 
 * @param {boolean} obj 
 * @returns the number of true values there are in an array.
 */
function countTrue(obj) {
    return obj.filter(element => element === true).length; // I used the filter() method which creates another array with all "true" elements. 
 }
 
 console.log(countTrue([''])); //in output i have the length of new array with all "true" elements => 0 
 console.log(countTrue([true, false, false, true, false])); // returns 2
 console.log(countTrue([false, false, false, false])); // returns 0











