let persons = {
  Emma: 71,
  Jack: 45,
  Amy: 15,
  Ben: 29,
};
function oldest(obj) {
  return Object.keys(obj).sort((a, b) => obj[a] - obj[b]).slice(-1).join();
}
console.log(oldest(persons)); // Emma
