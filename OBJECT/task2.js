function removeProperty(obj, key) {
  delete obj[key];
  return obj;
}
console.log(removeProperty({ a: 2, b: 3 }, "a"));
