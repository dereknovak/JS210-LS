/*
I: 2 args
- A string
- A string, where split should occur
O: Logs substrings to console

Rules:
- Logs should be on separate lines
- Error message if no delimiter
- If `''` then every character
- Should log before, even if delimiter as at beginning of string
    - If nothing after, don't log a blank line
- If delimiter not present, log the string
- Can only use `[]` and `length`

Algorithm:
- Guard clause: no delim error message
- Initialize a newString to ''
- Loop thru characters
    - If character is delim
        - log newString unless last character
        - reset newString

*/

function splitString(string, delim) {
  if (delim === undefined) return console.log('ERROR: No delimiter');

  let substring = '';
  for (let i = 0; i <= string.length - 1; i++) {
    if (string[i] === delim) {
      console.log(substring);
      substring = '';
    } else if (delim === '') {
      console.log(string[i]);
    } else {
      substring += string[i];
    }
  }

  if (substring) console.log(substring);
}

splitString('abc,123,hello world', ',');
splitString('hello');
splitString('hello', '');
splitString('hello', ';');
splitString(';hello;', ';');