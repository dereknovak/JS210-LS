/*
Problem:
I: An integer
O: A boolean, rep if the number is prime or not

Rules:
- Num will be non-negative

Example:
1 => false
2 => true
3 => true

DS:
None

Algo:
isPrime
- Loop thru all nums up to that num
    - Check if dividing by num has a remainder
    - Return false if any numbers are 0
- Return true
*/

function isPrime(num) {
  if ([0, 1].includes(num)) return false;

  for (let divisor = 1; divisor <= (num / 2).ceil; divisor++) {
    if (num % divisor === 0) return false;
  }

  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false