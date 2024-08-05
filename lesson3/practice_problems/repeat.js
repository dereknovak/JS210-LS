function repeat(string, times) {
  if (!(Number.isInteger(times)) || times < 0) return undefined;

  let result = '';
  for (let i = 1; i <= times; i++) {
    result += string;
  }

  return result;
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined