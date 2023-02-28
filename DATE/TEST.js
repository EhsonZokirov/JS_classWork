function foo(obj, str) {
  let res = undefined;
  return Object.keys(obj) === str ? null : obj;
}
console.log(foo({ piano: 300, guitar: 100, tv: 50 }, "piano"));
