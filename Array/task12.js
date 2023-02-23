function sortByLength(arr) {
  let arr2 = [];
  return arr.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(["Google", "Apple", "Microsoft"])); // [ 'Apple', 'Google', 'Microsoft' ]
console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])); // [ 'Raphael', 'Leonardo', 'Donatello', 'Michelangelo' ]
