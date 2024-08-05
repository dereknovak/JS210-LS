/*
2 Functions:
indexOf
I: 2 inputs
- A string
- Another string, used to find the index where it starts in first
O: An integer, rep the index

lastIndexOf
I: 2 inputs
- A string
- Another string, used to find the last index where it starts
O: An integer, rep the index

Rules:
- First the first index of the location
    - 'Whale' would return the index at 'W'
    - True for both functions
- If not found, return -1
- Case sensitive
- Can only use `[]` and `length` method, but no other string methods

Example:
'Some strings', 's'
5, 11
indexOf => 5
lastIndexOf => 11

Algorithm:
indexOf:
- Determine length of secondString
    - Set this equal to a countdown
- Loop thru all characters of firstString
    - Compare each letter to the first letter of secondString
    - Once found, start a new loop
        - Check each character index by index
        - After each loop, decrement countdown by 1
        - return false if any character doesn't match
        - return true if all characters match by end of countdown

lastIndexOf:
- 
*/

function indexOf(firstString, secondString) {
  for (let firstIndex = 0; firstIndex <= firstString.length - 1; firstIndex++) {
    if (firstString[firstIndex] === secondString[0]) {
      let result = firstIndex;
      firstIndex++;

      for (let secondIndex = 1; secondIndex <= secondString.length - 1; secondIndex++) {
        if (firstString[firstIndex] !== secondString[secondIndex]) {
          return -1;
        }

        firstIndex++;
      }

      return result;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  for (let firstIndex = firstString.length - 1; firstIndex >= 0; firstIndex--) {
    if (firstString[firstIndex] === secondString[0]) {
      let result = firstIndex;
      firstIndex++;

      for (let secondIndex = 1; secondIndex <= secondString.length - 1; secondIndex++) {
        if (firstString[firstIndex] !== secondString[secondIndex]) {
          return -1;
        }

        firstIndex++;
      }

      return result;
    }
  }

  return -1;
}

console.log(indexOf('Some strings', 's'));
console.log(indexOf('Blue Whale', 'Whale'));
console.log(indexOf('Blue Whale', 'Blute'));
console.log(indexOf('Blue Whale', 'leB'));

console.log('');

console.log(lastIndexOf('Some strings', 's'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all')); 