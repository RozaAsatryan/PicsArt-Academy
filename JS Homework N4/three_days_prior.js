function threeDaysAgo(date) {
  let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate() - 3;
  let newDate = new Date(year, month, day),
    newMonth = Number(newDate.getMonth()) + 1;
  if (newMonth < 10) newMonth = "0" + newMonth;
  return newDate.getFullYear() + "-" + newMonth + "-" + newDate.getDate();
}
0