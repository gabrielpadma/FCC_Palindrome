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

function isPalindromeRecursive(str) {
  // Basis (Base Case): Jika panjang string kurang dari atau sama dengan 1, itu adalah palindrome
  if (str.length <= 1) {
    return true;
  }

  // Pengecekan karakter pertama dan terakhir
  const firstChar = str[0].toLowerCase();
  const lastChar = str[str.length - 1].toLowerCase();

  // Jika karakter pertama dan terakhir tidak cocok, itu bukan palindrome
  if (firstChar !== lastChar) {
    return false;
  }

  // Panggil fungsi rekursif dengan substring tanpa karakter pertama dan terakhir
  return isPalindromeRecursive(str.slice(1, -1));
}
console.log(palindromeRecursive("racecar"));
