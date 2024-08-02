```js
function changeMyWords(words) {
  console.log(words);
  words[0] = 'Hi';
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);
```

This example will log `[ 'Hello', 'Goodbye' ]` and `[ 'Hi', 'Goodbye']` to the console on separate lines.

When passing `myWords` as an argument to the defined `changeMyWords` function on line 7, its referenced object `['Hello', 'Goodbye']` is bound to the function's parameter `words`. Because this deals with an array object, a reference to the original object is assigned, meaning the it can potentially be mutated within the function.

Within the function, this array is immediately logged to the console, outputting the original array. The first element is then reassigned to the string object `'Hi'`, which mutates the original array referenced by both variables. Because both variables see this change, when passing `myWords` to the `log` method, the mutated array `[ 'Hi', 'Goodbye' ]` is output.