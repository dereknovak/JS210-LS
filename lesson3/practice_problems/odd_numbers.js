/*
I: An integer, last number in a sequence from 1..n
O: Integer(s), all odd, separate lines (logged)

Rules:
- Each output should be on a separate line
- Each int should be odd
- Include input number if necessary

DS:
- Array for all ints

Algorithm:
- ITERATE thru all numbers up to max num
    - LOG odd values to console
        - Check if value is odd
    - Increment by 1
    - Stop iteration when exceeding max number
*/

function isOdd(num) {
  return num % 2 === 1;
}

function logOddNumbers(maxNum) {
  for (let currentNum = 1; currentNum <= maxNum; currentNum++) {
    if (isOdd(currentNum)) console.log(currentNum);
  }
}

logOddNumbers(19);

// Further Exploration 1

function logOddNumbers2(maxNum) {
  for (let currentNum = 1; currentNum <= maxNum; currentNum++) {
    console.log(currentNum);
  }
}

logOddNumbers2(19);

// Further Exploration 2

function logOddNumbers3(maxNum) {
  for (let currentNum = 1; currentNum <= maxNum; currentNum++) {
    if (!isOdd(currentNum)) continue;
    console.log(currentNum)
  }
}

logOddNumbers3(19);