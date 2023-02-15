/*
Determining if a number is a palindrome

Определение, является ли число палиндромом.

Муайян кардани он, ки рақам палиндром аст
*/

function isPalindrome(numString = "") {
  let res = "";
  for (let i = numString.length - 1; i >= 0; i--) {
    res += numString[i];
  }
  return res == numString; // boolean
}

console.log(isPalindrome("101")); // "101" palindrome
console.log(isPalindrome("201")); // "201" !palindrome
