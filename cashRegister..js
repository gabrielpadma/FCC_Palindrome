function checkCashRegister(price, cash, cid) {
  let change = [];
  let haveToChange = cash - price;

  const denominations = [
    { name: "ONE HUNDRED", value: 100 },
    { name: "TWENTY", value: 20 },
    { name: "TEN", value: 10 },
    { name: "FIVE", value: 5.0 },
    { name: "ONE", value: 1.0 },
    { name: "QUARTER", value: 0.25 },
    { name: "DIME", value: 0.1 },
    { name: "NICKEL", value: 0.05 },
    { name: "PENNY", value: 0.01 },
  ];

  const totalcid = cid.reduce((acc, curr) => {
    return acc + curr[1];
  }, 0);

  if (haveToChange > totalcid) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (haveToChange == totalcid) {
    return { status: "CLOSED", change: cid };
  }

  cid = cid.map((el) => el.reverse()).reverse();

  denominations.forEach((uangObj, index) => {
    let counter = uangObj.value;
    let acc = 0;

    while (haveToChange >= uangObj.value && counter <= cid[index][0]) {
      acc = acc + uangObj.value;
      haveToChange = (haveToChange - uangObj.value).toFixed(2);
      counter = counter + uangObj.value;
    }

    if (acc !== 0) {
      change.push([uangObj.name, acc]);
    }
  });

  if (
    change.reduce((acc, cur) => acc + cur[1], 0).toFixed(2) !=
    (cash - price).toFixed(2)
  ) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: change };
}

let tes = checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
console.log(tes);
