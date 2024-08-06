function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  let lowerString = '';

  for (let i = 0; i <= string.length - 1; i++) {
    let stringCode = string.charCodeAt(i);
    
    if (stringCode >= 65 && stringCode <= 90) {
      stringCode += CONVERSION_OFFSET;
      let lowerChar = String.fromCharCode(stringCode);

      lowerString += lowerChar;
    } else {
      lowerString += string[i];
    }
  }

  return lowerString;
}

console.log(toLowerCase('ALPHABET'));
console.log(toLowerCase('123'));
console.log(toLowerCase('abcDEF'));