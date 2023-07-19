function palindrome(str) {
  let newStr = str.match(/[a-zA-Z0-9]+/g).join("");
  for (let i = 0; i < newStr.length / 2; i++) {
    let curChar = i;
    let charAkhir = newStr.length - i - 1;
    if (newStr[curChar].toLowerCase() !== newStr[charAkhir].toLowerCase())
      return false;
  }

  return true;
}

console.log(palindrome("_eye"));
