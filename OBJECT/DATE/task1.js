function findDate(obj1, obj2) {
  let res = obj2.getTime() - obj1.getTime();
  return res / (24 * 60 * 60 * 1000);
}
console.log(findDate(new Date("2022-02-01"), new Date("2022-02-05")));
