/*
Problem:
I: An integer
O: Integer(s), rep all multiples of odd numbers

Rules:
- All multiples should be odds
- Each output should be logged on a separate line
- Logs should be in decending order
- Logs should be between 0 and 100
- Include 100 if necessary
- Include * 1

Example:
17
- 85
- 51
- 17

DS:
- An array to house values

Algo:
- Declare a multiples variable
- Ascend thru multiples, starting at 1
    - If product is less than or equal to 100, add to multiples
    - Stop adding once this number is found
- Reverse array
- Log values to console
*/

function logMultiples(num) {
  let multiples = [];
  for (let divisor = 1; divisor * num <= 100; divisor += 2) {
    multiples.push(divisor * num);    
  }

  multiples.reverse().forEach(num => console.log(num));
}

logMultiples(17);
logMultiples(21);