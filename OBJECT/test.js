function addName(obj, str, num) {
  obj[str] = num;
  return obj;
}
console.log(addName({}, "Brutus", 300)); // {Burutus:300}
console.log(addName({ piano: 500 }, "Brutus", 400)); // {piano:500, Burutus:400}
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 400)); // {}

/*
Учитывая три аргумента — объект obj украденных
предметов, имя питомца и значение — вернуть объект с
этим именем и значением в нем (в виде пар ключзначение).
*/
