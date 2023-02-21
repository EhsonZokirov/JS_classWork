function makeTitle(str) {
  let Split = str.split(" ");
  let title = "";
  for (let i = 0; i < Split.length; i++) {
    Split[i] = Split[i].charAt(0).toUpperCase() + Split[i].substring(1);
  }
  return Split.join(" ");
}
console.log(makeTitle("Hello mr. ehson"));
