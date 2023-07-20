function rot13(str) {
  let newStr = str.match(/[a-zA-Z0-9!?.]+/g);
  let decrArr = newStr
    .map((el) => {
      let tempArr = [];
      el.split("").forEach((char) => {
        let decryptedCharCode = char.charCodeAt();
        if (decryptedCharCode >= 65 && decryptedCharCode <= 90) {
          decryptedCharCode = char.charCodeAt() - 13;
          if (decryptedCharCode < 65) decryptedCharCode += 26;
        }
        tempArr.push(String.fromCharCode(decryptedCharCode));
      });
      return tempArr.join("");
    })
    .join(" ");
  console.log(decrArr);
  return decrArr;
}

rot13("SERR CVMMN!");
