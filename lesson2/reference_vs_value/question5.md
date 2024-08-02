```js
function changeMyWords(words) {
  console.log(words);
  words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);
```

This example will log `[ 'Hello', 'Goodbye' ]` to the console twice on separate lines.

On line 6, global variable `myWords` is declared and initialized to the array object `['Hello', 'Goodbye']`. On line 7, the defined function `changeMyWords` is invoked and is passed `myWords` as an argument, binding its value to the function's parameter `words`. Because this value is an array, and an array is a reference type, these 2 variables now point to the same object in memory.

Within the function, the value of `words` is immediately logged to the console, outputting the first `[ 'Hello', 'Goodbye' ]`. `words` is then reassigned to the *new array object* `['Hi', 'Goodbye']`. Although array objects are mutable, reassignment is not a mutating operation; therefore, the reference of `words` changed, but not `myWords`. For this reason, when passing `myWords` as an argument to the `log` method on line 8, `[ 'Hello', 'Goodbye' ]` is once again output.

While it may seem that this problem is demonstrating a **pass-by-reference** object passing strategy due to passing a variable that references an array into a function, it more accurately demonstrates **variables as pointers**, as the reassignment of `words` had no effect on the reference for `myWords`.