function nthElementOf(arr, index) {
  return arr[index];
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(nthElementOf(digits, 3));   // returns 16
console.log(nthElementOf(digits, 8));   // returns `undefined`
console.log(nthElementOf(digits, -1));  // returns `undefined`

// These return `undefined` because there has not been a value assigned
// to the respective key. Index `8` is outside of the the range of the
// array to the right, and `-1` is outside of the range to the left.