function isEmpty(obj) {
  if (Object.keys(obj).length > 0) {
    return true;
  }
  return false;
}
console.log(isEmpty({})); // true
console.log(isEmpty({ a: 1 })); // false

/* 
Напишите функцию, которая возвращает true, если объект
пуст, и false в противном случае.
*/
