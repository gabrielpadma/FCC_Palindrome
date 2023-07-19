function palindrome(str) {
  let newStr = str.match(/[a-zA-Z0-9]+/g);
  console.log(newStr);
  return true;
}

palindrome("0_0 (: /- :) 0-0");
