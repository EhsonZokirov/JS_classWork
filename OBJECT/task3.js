/* 
Звонит страховой агент, выбранный вами полис не 
распространяется на суммы ниже 5000€, это не будет 
соответствовать вашему статусу, о котором вы говорили в 
то время. Учитывая объект со списком украденных 
предметов, верните копию этого списка без значений ниже 
5000.
*/

function biges5000(obj) {
  Object.keys(obj).map((e) => (obj[e] < 5000 ? delete obj[e] : obj));
  return obj;
}
console.log(biges5000({ tv: 4999, guitar: 5000, fork: 5001 }));



