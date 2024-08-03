```js
function capitalize() {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim() {
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);
```

This example will log `hello!!!`, `Hello`, and `hello!!!` to the console on separate lines.

On line 9, global variable `word` is declared and initialized to the string value `'hello'`. On line 10, the defined `capitalize` function is invoked and gets passed `word` as an argument; however, `capitalize` does not accept any arguments, so this value is ignored. Within then function, the `toUpperCase` method is called on the first character of global variable `word`, returning `'H'`. The `slice` method is then called on `word`, returning the new string `'ello'`. The function then returns the new string `'Hello'` using string concatenation and assigns it to the global variable `capitalizedWord`.

On line 11, the defined `exclaim` function is invoked and passed `capitalizedWord` as an argument, but does nothing with it again for the same reason. Within the function, global variable `word` is reassigned to `'hello!!!'`, which is then returned from the function and assigned to `exclaimedWord`.

