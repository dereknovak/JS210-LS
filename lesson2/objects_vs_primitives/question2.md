```js
let myWord = 'Hello';
myWord.repeat(3);
console.log(myWord);
myWord.replace('H', 'J');
console.log(myWord);
myWord.split(' ');
console.log(myWord);
```

This example will log `Hello` to the console 3 times on separate lines.

Each method called on `myWord` simply returns a new value and does not reassign the variable. `'Hello'` is a primitive value, and is therefore non-mutating, so the value never changes and each invocation of `log` simply outputs the original value.
