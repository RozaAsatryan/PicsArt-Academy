
function getDays(firstDate, secondDate){
    console.log((secondDate.getTime() - firstDate.getTime())/ (1000 * 60 * 60 * 24));
  }
  
  
  getDays(
    new Date("December 29, 2018"),
    new Date("January 1, 2019"),
  )