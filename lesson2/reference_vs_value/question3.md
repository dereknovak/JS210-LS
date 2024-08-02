```js
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
let myOtherWord = changeMyWord(myWord);
console.log(myWord);
console.log(myOtherWord);
```

This example will log `Hello` and `HELLO` to the console on separate lines.

This question is nearly identical to the previous, with the exception of declaring a new global variable `myOtherWord` and initializing it to the function's returned value, that still being `'HELLO'`. These 2 values are logged to the console.