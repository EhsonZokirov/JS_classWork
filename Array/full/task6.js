function reverseArr(arr) {
  let res = [];
  let arr2 = arr.toString().split("").reverse();
  arr2 = arr2.filter((e)=>{
    if(e == "1" ||  e == "2" ||e == "3" ||e == "4" ||e == "5" ||e == "6" ||e == "7" ||e == "8" ||e == "9"){
      res.push(Number(e));
    }
  })
  return res
}
console.log(reverseArr(12345));
