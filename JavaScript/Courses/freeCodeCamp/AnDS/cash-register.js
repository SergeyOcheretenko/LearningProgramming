const MONEY = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1.0,
  FIVE: 5.0,
  TEN: 10.0,
  TWENTY: 20.0,
  "ONE HUNDRED": 100.0
};

function countSum(cid) {
  let sum = 0;
  for (const money of cid) {
    sum += money[1];
  }
  return sum;
}

function checkCashRegister(price, cash, cid) {
  const result = {
    status: null,
    change: []
  };
  
  const sum = countSum(cid);
  const diff = cash - price;

  if (sum === diff) {
    result.status = "CLOSED";
    result.change = cid;
    return result;
  }

  if (sum < diff) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }

  let change = 0.0;
  const array = [];
  cid = cid.reverse();
  
  for (const money of cid) {
    const name = money[0];
    const moneySum = money[1];
    const moneyPrice = MONEY[name];
    const amount = Math.round(moneySum / moneyPrice);
    let subChange = [name, 0.0];
    
    for (let i = 1; i <= amount; i++) {
      if (Math.round((change + moneyPrice) * 100) / 100 <= diff) {
        change = Math.round((change + moneyPrice) * 100) / 100;
        subChange[1] += moneyPrice;
      } else {
        if (i !== 1) {
          array.push(subChange);
        }
        break;
      }
      if (i === amount) array.push(subChange);
    }
  }

  if (change === diff) {
    result.status = "OPEN";
    result.change = array;
  } else {
    result.status = "INSUFFICIENT_FUNDS";
  }

  return result;
}

console.log(checkCashRegister(40, 100, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
