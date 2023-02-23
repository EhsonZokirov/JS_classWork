function sevenBoom(arr) {
  let arr2 = arr.join().split("");
  let res = arr2.find((e) => e == 7);
  if (res == 7) {
    return "Boom!";
  }
  return "There is no 7 in the array";
}
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); // Boom!
console.log(sevenBoom([886, 47, 12, 12])); // Boom!
console.log(sevenBoom([901, 08, 50, 04])); // 'There is no 7 in the array'
