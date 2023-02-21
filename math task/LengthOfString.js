function lengthOfString(str, cnt = 0) {
  if (str[cnt] == undefined) {
    return cnt;
  }
  return lengthOfString(str, cnt + 1);
}

console.log(lengthOfString("make"));
