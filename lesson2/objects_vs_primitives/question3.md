```js
let myWords = ['Hello']
mywords.push('Goodbye');

console.log(myWords);
```

This example will log `[ 'Hello', 'Goodbye' ]` to the console.

The variable `myWords` references an array object containing the element `'Hello'`. The string `'Goodbye'` is then *destructively appended* onto this array by invocation of the `push` method, mutating the array to `['Hello', 'Goodbye']`, which is then logged to the console on line 4.