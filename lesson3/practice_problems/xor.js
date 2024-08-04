/*
Problem: 
I: 2 args
- Anything
- Anything
O: A boolean, if exactly one arg is true

Rules:
- True if exactly one arg is truthy

Example:
- 'a', undefined => true
- true, '2' => false

DS:
- None

Hypothesis:
- Use if statements 
- Ternary?

Algorithm:
- If true and false
    - Return true

*/

function isXor(arg1, arg2) {
  return arg1 ? !arg2 : !!arg2
}

console.log(isXor(false, true) === true);     // true
console.log(isXor(true, false) === true);     // true
console.log(isXor(false, false) === false);    // false
console.log(isXor(true, true) === false);      // false


console.log(isXor(false, 3) === true);        // true
console.log(isXor('a', undefined) === true);  // true
console.log(isXor(null, '') === false);        // false
console.log(isXor('2', 23) === false);         // false