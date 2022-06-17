function format(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '');
}

function palindrome(str) {
  const formatted = format(str).toLowerCase();
  return formatted === formatted.split('').reverse().join('');
}

console.log(palindrome("My age is 0, 0 si ega ym."));
