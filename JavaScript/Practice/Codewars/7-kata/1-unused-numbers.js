function unusedDigits(...array) {
  const NUMBERS = '0123456789';
  let result = '';
  
  for (const number of NUMBERS) {
    let flag = false;
    for (const elem of array) {
      if (String(elem).includes(number)) flag = true
    }
    
    if (!flag) result += number;
  }
  return result;
}

console.log(unusedDigits(2015, 58, 7));
// 3469
