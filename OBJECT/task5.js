let arrayObj = [
  {
    id: 1,
    name: "Jack",
    notes: [5, 3, 4, 2, 5, 5],
  },
  {
    id: 2,
    name: "Ewa",
    notes: [2, 3, 3, 3, 2, 5],
  },
  {
    id: 3,
    name: "Miha",
    notes: [2, 2, 4, 4, 3, 3],
  },
];
function getStudentTopNotes(arr) {
  let arr1 = [];

  for (let i = 0; i < arr.length; i++) {
    arr1.push(Math.max(...arr[i].notes.sort()));
  }
  return arr1;
}

console.log(getStudentTopNotes(arrayObj)); // [ 5, 5, 4 ]

/* 
Создайте функцию, которая принимает массив студентов и
возвращает массив их верхних нот. Если у ученика нет нот,
то предположим, что его верхняя нота равна 0.
*/
