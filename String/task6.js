/*
Создайте функцию, которая перемещает все заглавные буквы в 
начало слова.
*/

function capToFront(str) {
  let upp = "";
  let lover = "";
  let res = " ";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      upp += str[i];
    } else lover += str[i];
  }
  res = upp + "" + lover;
  return res;
}
console.log(capToFront("hApPy"));
