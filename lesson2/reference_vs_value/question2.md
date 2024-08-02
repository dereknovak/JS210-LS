```js
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
myWord = changeMyWord(myWord);
console.log(myWord);
```

This example logs `'Hello'` and `'HELLO'` to the console on separate lines.

When passing `myWord` as an argument to the defined `changeMyWord` function, its value is bound to the function's parameter `word`. Within the function, the value of `word` is logged to the console, which still references `'Hello'`. It's important to note here that this string, although seemingly the same, is different than the original, as strings are primitive values and take up different places in memory. `word` is then reassigned to its uppercased version and then returned from the function.

On line 8, `myWord` is then *reassigned* to this returned value, so, when passed as an argument to the `log` method, `HELLO` is output.