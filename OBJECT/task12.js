let obj = {
  q: 1,
  w: 2,
  e: 3,
  r: 4,
  t: 5,
  y: 6,
};
function invert(obj) {
  let obj2 = {};
  obj2 = Object.keys(obj).reduce((acc, e) => {
    if (true) acc[obj[e]] = e;
    return acc;
  }, {});
  return obj2;
}
console.log(invert(obj));
