/*
Problem
I: An int
O: Log every 2 prime numbers that sum to that number

Rules:
- Can use `isPrime` function
- Log all 2 number combinations
- If expectedSum is odd or less than 4, log `null`

Example:
3 => null
4 => 2 2
12 => 5 7

DS:
- None

Algorithm
- Return null if odd or less than 4
- Loop through numbers up to expectedSum (value1)
    - Loop through numbers up to expectedSum again (value2)
    - If both are prime and add to expectedSum, log to console
*/

function isPrime(num) {
  if (num <= 1 || (num > 2 && num % 2 === 0)) return false;
  
  for (let divisor = 3; divisor <= num / 2; divisor += 2) {
    if (num % divisor === 0) return false;
  }
  
  return true;
}

function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    return console.log(null);
  }

  for (let value1 = 1; value1 <= expectedSum / 2; value1++) {
    for (let value2 = expectedSum; value2 >= expectedSum / 2; value2--) {
      // console.log(value1, value2);
      if ((isPrime(value1) && isPrime(value2)) && (value1 + value2 === expectedSum)) {
        console.log(value1, value2);
      }
    }
  }
}

checkGoldbach(3);
checkGoldbach(4);
checkGoldbach(12);
checkGoldbach(100);
