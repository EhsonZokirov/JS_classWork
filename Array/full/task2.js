function numInStr(arr) {
  let arr2 = [...arr];
  return arr2.filter((e) => {
    return (
      e.includes(0) ||
      e.includes(1) ||
      e.includes(2) ||
      e.includes(3) ||
      e.includes(4) ||
      e.includes(5) ||
      e.includes(6) ||
      e.includes(7) ||
      e.includes(8) ||
      e.includes(9)
    );
  });
}
console.log(numInStr(["1a", "2", "2b", "basd asd"])); // [ 1b ,2b ]
