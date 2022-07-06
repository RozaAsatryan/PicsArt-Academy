let customersObj = {
  "Batman": [22, 30, 11, 17, 15, 52, 27, 12, 60, 70, 98],
  "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45]
}

function pizzaPoints(obj, minOrder, minCost) {
return Object.keys(obj).filter(i => obj[i].filter(cost => cost >= minCost).length >= minOrder);
}


console.log(pizzaPoints(customersObj, 5, 20))