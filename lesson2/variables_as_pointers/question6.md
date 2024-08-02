```js
let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord;
myWord = 'Hello';

console.log(myWords);
console.log(myWord);
```

This example logs `[ 'Hi', 'Goodbye']` and `Hello` to the console on separate lines.

On line 1, global variable `myWords` is declared and initialized to an array object containing the elements `['Hello', 'Goodbye']`. On line 2, global variable `myWord` is declared and initialized to the string value `'Hi'`. On line 3, the first element of `myWords` is reassigned to the same value (not same in memory) as `myWord`, causing the original array to be mutated to `['Hi', 'Goodbye']`. `myWord` is then reassigned to `'Hello'`, which has no influence on the array.

Although it appears that the first element of the array is referencing whatever `myWord` reference, this is not the case. Instead, JavaScript tells the first element of the array to reference whatever value `myWord` is referencing at that given time in the codebase.