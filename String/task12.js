/*
Учитывая строку чисел, разделенных запятой и пробелом, 
вернуть произведение чисел. 
*/

function multiplyNumbers(x = "") {
  let result = x.split(",");
  let mult = 1;
  for (let i = 0; i < result.length; i++) {
    mult *= result[i];
  }

  return mult;
}
console.log(multiplyNumbers("1,2,3,4")); // 24
console.log(multiplyNumbers("10,-2")); // -20
