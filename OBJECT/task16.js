// destracting in array;

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let [first, second, third, ...other] = arr;
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(other); // 1
