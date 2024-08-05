/*
Problem: Greatest Common Divisor
I: 2 inputs
- Int
- Int
O: An int, representing the greatest common divisor between the 2 inputs

Rules:

Example:
12, 4 => 4
15, 10 => 5

DS:
- Array to keep track of divisors

Algorithm
- Determine smallest int
    - 
- Loop thru numbers 2..smallest
    - If value is evenly divisible for both nums, replace common divisor
- Return common divisor
*/

function divisible(num, divisor) {
  return num % divisor === 0;
}

function gcd(num1, num2) {
  let commonDivisor = 1;
  let min = Math.min(num1, num2);

  for (let divisor = 2; divisor <= min; divisor++) {
    if (divisible(num1, divisor) && divisible(num2, divisor)) commonDivisor = divisor;
  }

  return commonDivisor;
}

console.log(gcd(12, 4) === 4);
console.log(gcd(15, 10) === 5);
console.log(gcd(9, 2) === 1);