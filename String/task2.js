const findNemo = (str) => {
  let str2 = str.split(" ").indexOf("Nemo");
  return str?`I find Nemo at ${str2+1} `
};

console.log(findNemo(`I im finding ! `));
