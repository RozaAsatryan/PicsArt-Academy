function dayOfYear(str){
    let date = str.split("/");
    let startYear = new Date(date[2]);
    let endYear = new Date(date[2], date[0] - 1, date[1]);
   return Math.ceil((endYear - startYear) / 8.64e7) + 1;
  }
  
  
  console.log(dayOfYear("12/13/2020")); // ➞ 348
  
  console.log(dayOfYear("12/17/2020")); // ➞ 352
  
  console.log(dayOfYear("11/16/2020")); // ➞ 321
  
  console.log(dayOfYear("1/9/2019")); // ➞ 9