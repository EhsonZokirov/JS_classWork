let obj = {
  q: 1,
  w: 2,
  e: 3,
  r: 4,
  t: 5,
  y: 6,
};
function invert(obj) {
  let arr = {};
  return (arr = Object.keys(obj).reduce((acc, e) => {
    if (true) acc[obj[e]] = e;
    return acc;
  }, {}));
}
console.log(invert(obj));
