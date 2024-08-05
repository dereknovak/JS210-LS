/*
I: A string
O: The same string, with spaces before and after removed

Rules:
- Only String methods allowed: `[]` and `length`
- Do not remove any spaces in between the characters of string

Example:
'abc   ' => 'abc'
'  a b   c    ' => 'a b    c'

Algorithm:
- Delete strings that are spaces until a character is found (ascending)
- Delete strings that are spaces until a character is found (descending)
- Return the new string
*/

function trim(str) {
  for (let i = 0; ; i++) {
    if (str[i] !== ' ') {
      var startIdx = i;
      break;
    }
  }

  for (let i = str.length - 1; ; i--) {
    if (str[i] !== ' ') {
      var endIdx = i;
      break;
    }
  }

  let result = ''
  for (let i = startIdx; i <= endIdx; i++) {
    result += str[i];
  }

  return result;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""