function telephoneCheck(str) {
  const format = str.replace(/[^\d-\s\(\)]/g, '');

  const DONE = [
    /^\d{3}-\d{3}-\d{4}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^\(\d{3}\) \d{3}-\d{4}$/,
    /^\d{10}$/,
    /^\d{3} \d{3} \d{4}$/,
    /^1[\s]?\d{3}-\d{3}-\d{4}$/,
    /^1[\s]?\(\d{3}\)[\s]?\d{3}-\d{4}$/,
    /^1[\s]?\d{10}$/,
    /^1[\s]?\d{3} \d{3} \d{4}$/,
  ];

  let flag = false;

  for (const regex of DONE) {
    if (regex.test(format)) {
      flag = true;
      break;
    }
  }

  return flag;
}

telephoneCheck("555-555-5555");
