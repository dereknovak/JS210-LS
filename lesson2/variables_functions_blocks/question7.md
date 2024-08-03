```js
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim(word) {
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);
```

This example will log `hello`, `Hello`, and `Hello!!!` to the console on separate lines.

On line 9, global variable `word` is declared and initialized to the string `'hello'`. On line 10, the defined `capitalize` function is invoked and gets passed `word` as an argument, binding its value to the function's parameter `word`. Note that these are 2 separate variables despite using the same name, and the variable local to `capitalize` will overshadow the global variable.

Within the function, the `toUpperCase` method is called on the first character of `word`, the `slice` method is called on `word`, then these 2 values are concatenated together to form `'Hello'`. This value is returned from the function and assigned to the declared `capitalizedWord`.

On line 11, the defined `exclaim` function is invoked and passed `capitalizedWord` as an argument, binding its value to the function's parameter `word`. Again, this `word` overshadows the global variable, so it will not be affected. Within the function, the local variable `word` is reassigned to itself concatenated with `'!!!'`, returning `'Hello!!!'`. This value is then returned from the function and assigned to the declared variable `exclaimedWord`.

Because `word` was never used outside of passing its value as an argument, the value will stay the same as when it was initialized.