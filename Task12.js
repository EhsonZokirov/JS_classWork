function calc(a, symbol = "", b) {
  if (symbol == "+") {
    return a + b;
  }
  if (symbol == "-") {
    return a - b;
  }
  if (symbol == "*") {
    return a * b;
  }
  if (symbol == "/") {
    return a / b;
  }
}
console.log(calc(4, "/", 2));

// basic calculator
