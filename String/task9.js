/* 
Создайте функцию, которая принимает две строки в качестве 
аргументов и возвращает количество раз, когда первая строка 
(один символ) встречается во второй строке. 
*/

function charCount(str1, str2) {
  let cnt = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str1 == str2[i]) {
      cnt++;
    }
  }
  return cnt;
}
console.log(charCount("b", " big fat bubble"));
