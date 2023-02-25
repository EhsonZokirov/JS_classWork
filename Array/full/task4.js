/*
Мэри хочет пробежать марафон на 25 миль. 
Когда она пытается записаться на марафон, 
она замечает, что в регистрационном листе прямо не указана продолжительность марафона.
Вместо этого длина марафона указана небольшими частями. 
Помогите Мэри узнать, сколько на самом деле длится марафон.
Верните true, если длина марафона составляет 25 миль, в противном случае верните false.
*/

function marathonDistance(arr) {
  let arr2 = [];
  arr2 = arr.reduce((a, b) => {
    return Math.abs(a) + Math.abs(b);
  });
  return arr2 == 25 ? true : false;
}
console.log(marathonDistance([1, 2, 3, 4])); // false
console.log(marathonDistance([1, 9, 5, 8, 2])); // true
console.log(marathonDistance([-6, 15, 4])); // true
