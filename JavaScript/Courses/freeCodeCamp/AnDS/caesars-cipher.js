function isUpper(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}

function rot13(text) {
  let result = '';
  let new_letter = null;
  
  for (const letter of text) {
    const lower = letter.toLowerCase();
    
    if (!'abcdefghijklmnopqrstuvwxyz'.includes(lower)) {
      result += letter;
      continue;
    }
    const code = lower.charCodeAt();
    
    if (code < 110) {
      new_letter = String.fromCharCode(code - 13 + 26)
    } else {
      new_letter = String.fromCharCode(code - 13)
    }
  
    if (isUpper(letter)) {
      result += new_letter.toUpperCase();
    } else {
      result += new_letter
    }
  }

  return result;
}

console.log(rot13("SERR CVMMN!"));
