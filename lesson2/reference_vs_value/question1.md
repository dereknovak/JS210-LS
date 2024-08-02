```js
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
}

let myWord = 'Hello';
changeMyWord(myWord);
console.log(myWord);
```

This example will log `Hello` twice to the console on separate lines.

When `myWord` is passed as an argument to the defined `changeMyWord` function, its value `'Hello'` is bound to the function's parameter `word`. Within the function, this value is immediately logged to the console, which is where the first `Hello` is seen. Function local variable `word` is then reassigned to the uppercase version `'HELLO'`; however, because strings are primitive values in JavaScript, both `word` and `myWord` point to different strings in memory, so nothing done to `word` will affect `myWord`. Secondly, primitive values are immutable, so nothing could mutate its value, anyways.

Because no change occured, when passed as an argument to the `log` method, the original value `'Hello'` is output.