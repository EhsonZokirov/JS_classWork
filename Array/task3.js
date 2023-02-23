function secondLargest(arr) {
  return arr.sort((a, b) => a - b).slice(-2, -1);
}
console.log(secondLargest([10, 40, 30, 20, 50])); // 40
console.log(secondLargest([54, 23, 11, 17, 10])); // 23
