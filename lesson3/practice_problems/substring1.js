function substr(string, start, length) {
  let newString = ''
  if (start < 0) start += string.length;

  for (let i = start; i < start + length; i++) {
    if (!string[i]) break;
    newString += string[i];
  }

  return newString;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""