/*
Сделать первую букву строки прописной.
Ҳарфи аввали сатрро калон кунед.
*/

function strFirstToUpp(str) {
  return str[0].toUpperCase() + "" + str.slice(1);
}
console.log(strFirstToUpp("string not starting with capital"));
