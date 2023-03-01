let obj = {
  name: "Paris",
  Papulation: "2,140,526",
  continent: "Europe",
};

function cityFact(obj) {
  let { name, Papulation, continent } = obj;
  return `${name} has a Papulation of ${Papulation} and is situated in ${continent}`;
}
console.log(cityFact(obj));
