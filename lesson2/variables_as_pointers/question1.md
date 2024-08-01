```js
let myWord = 'Hello';
let myOtherWord = myWord;

console.log(myWord);
console.log(myOtherWord);
```

This example will log `Hello` 2 times to the console on separate lines.

On line 1, global variable `myWord` is declared and initialized to the string `'Hello'`. On line 2, global variable `myOtherWord` is declared and initialized to a string with the same value as `myWord`. Both values are then logged to the console; because they reference `'Hello'`, we see the same output.

It's important to note that, although these appear to be the same value, the 2 `'Hello'` strings are at completely different parts in memory.