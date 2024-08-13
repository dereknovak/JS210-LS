function repeatedCharacters(str) {
  let charCount = {};
  let chars = str.split('');

  chars.forEach(char => {
    char = char.toLowerCase();
    if (Object.keys(charCount).includes(char)) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  });

  for (let prop in charCount) {
    if (charCount[prop] === 1) delete charCount[prop];
  }

  return charCount;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }