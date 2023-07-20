function convertToRoman(num) {
  const romanNum = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  let str = "";
  const numKeys = Object.keys(romanNum).reverse();
  numKeys.forEach((el) => {
    while (num >= el) {
      str += romanNum[el];
      num -= el;
    }
  });

  return str;
}

let tes = convertToRoman(501);

console.log(tes);
