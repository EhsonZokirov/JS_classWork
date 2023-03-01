let array = [
  { name: "Umar", budget: 23000 },
  { name: "Madood", budget: 40000 },
  { name: "Sattor", budget: 2700 },
];
function getBudget(arr) {
  let res;
  res = arr.map((e) => Number(e.budget));
  return res.reduce((a, b) => a + b, 0);
}
console.log(getBudget(array)); // 65700
