function itemsPurchased(obj, wallet) {
  let basket = [];
  for ([key, value] of Object.entries(obj)) {
    value = value.replace(",", "");
    value = +value.slice(1);
    let k = +wallet.slice(1); // ete k-i poxaren grum em wallet inhchu a tpum wallet.slice is not a function

    if (value <= k) {
      basket.push(key);
    }
  }
  console.log(basket);
}

itemsPurchased(
  {
    Water: "$1",
    Bread: "$3",
    TV: "$1,000",
    Fertilizer: "$20",
  },
  "$300"
);
