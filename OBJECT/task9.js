function sidedSharp(key) {
  let formule = {
    1: "Circle",
    2: "Semi-Circle",
    3: "Triangle",
    4: "Square",
    5: "Pentagon",
    6: "Nexagon",
    7: "Heptagon",
    8: "Hexagon",
    9: "octagon",
    10: "Decagon",
  };
  return formule[key];
}
console.log(sidedSharp(4));
