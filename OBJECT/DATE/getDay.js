function getDay(date) {
  let arr = ["Sunday", "Monday", "Tuesday", "Wednesday",'Thursday', "Friday", "Saturday"];
  for (let i = 0; i < arr.length; i++) {
    return arr[date.getDay()];
  }
}
console.log(getDay(new Date("12/07/2016"))); // Wendnesday
console.log(getDay(new Date("09/04/2016"))); // Sunday
console.log(getDay(new Date("12/08/2011"))); // Thursday
