/*
You'll be given a string of random characters (numbers, letters, and symbols).
To decode this string into the key we're searching for:
(1) count the number of occurences of each ascii lowercase letter, and
(2) return an ordered string, 26 places long, corresponding to the number of 
    occurences for each corresponding letter in the alphabet.

The string returned should always be 26 characters long, and only count lowercase letters.
You can assume that each lowercase letter will appear a maximum of 9 times in the input str.
*/

function decrypt(string) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
  let lowercaseCounts = '';
  
  [...ALPHABET].forEach(letter => {
    let count = 0;
    [...string].forEach(char => {
      if (letter === char) count += 1;
    });
    
    lowercaseCounts += String(count);
  });

  return lowercaseCounts;
}

console.log(decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001');
console.log(decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001');
console.log(decrypt('the quick brown fox jumps over the lazy dog') === '11113112111111411212211111');
console.log(decrypt('a1b2c3D4dda') === '21120000000000000000000000');
console.log(decrypt('a1aba2aca3aDaa4dda') === '91120000000000000000000000');
console.log(decrypt('1203904942@$2') === '00000000000000000000000000');
console.log(decrypt('ABCJDK3ROKGMIS3949') === '00000000000000000000000000');
console.log(decrypt('') === '00000000000000000000000000');

/*
LEADERS IN AN ARRAY
Problem Statement: Given an array, return an array of all the elements which are leaders.
A Leader is an element that is greater than all of the elements on its right side in the array.
*/

function getLeaders(numbers) {
  return numbers.filter((num1, idx) => {
    return numbers.slice(idx + 1).every(num2 => num1 > num2);
  });
}

console.log(getLeaders([10,22,12,3,0,6])) // [22, 12, 6]
console.log(getLeaders([4, 7, 1, 0])) // [7, 1, 0]
console.log(getLeaders([1])) // [1]
console.log(getLeaders([])) // []