```js
let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0];
myWords[0] = 'Hi';

console.log(myWords);
console.log(myWord);
```

This example logs `[ 'Hi', 'Goodbye' ]` and `Hello` to the console on separate lines.

On line 1, global variable `myWords` is declared and initialized to an array object containing the elements `['Hello', 'Goodbye']`. On line 2, global variable `myWord` is declared and initialized to the first element of `myWords`, which is `'Hello'`. On line 3, the first element of `myWord` is destructively reassigned to `'Hi'`, causing the array object to now contain the elements `['Hi', 'Goodbye']`, which we see logged to the console. Although this element is reassigned, this has no influence on `myWord` as it exists as a completely different reference--only a reassignment of `myWord` itself can change its value.