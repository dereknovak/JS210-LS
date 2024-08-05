/*
I: int, rep the number of rows that will be printed
O: Log output (see example)

Rules:
- nStars > 1 and < 10

Example:
3:
1**
12*
123

DS:
- None

Algorithm
- Determine total asterisks
- Accumulate all numbers
- As each number is pushed into an array, subtract the length of
the number from asterisks, then add to string
*/

function generatePattern(rows) {
  let output = [];
  let nums = [];
  let asterisksLength = 0;

  for (let i = 1; i <= rows; i++) {
    let currentNum = String(i);
    nums.push(currentNum);
    asterisksLength += currentNum.length;
  }

  let allNums = '';
  nums.forEach(num => {
    allNums += num;
    asterisksLength -= num.length;
    output.push(allNums + '*'.repeat(asterisksLength));
  });

  output.forEach(row => console.log(row));
}

generatePattern(7);
generatePattern(12);
generatePattern(100);