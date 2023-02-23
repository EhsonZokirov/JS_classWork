/* 
Дана строка, перевернуть все слова нечетной длины. Слова 
четной длины не изменяются.
*/

function reverseOdd(str = "") {
  let str2 = str.split(" ");
  let res = [];
  let res2 = [];

  for (let i = 0; i < str2.length; i++) {
    str2[i].length % 2 != 0
      ? (res += str2[i].split("").reverse().join("") + " ")
      : (res2 += str2[i] + " ");
  }
  return res + " " + res2;
}
console.log(reverseOdd("One two three four five")); // enO owt eerht  four five
