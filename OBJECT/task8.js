function relation(key) {
  let person = {
    "Darth Vader": "Father",
    Leia: "Sister",
    Han: "Brother in Law",
    R2D2: "droid",
  };
  return `Luke, I am you ${person[key]}`;
}
console.log(relation("Darth Vader")); // Father
console.log(relation("Leia")); // Sister
