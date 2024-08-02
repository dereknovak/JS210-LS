```js
let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye']

console.log(myWords);
console.log(myOtherWords);
```

This example will log `[ 'Hi', 'Bye' ]` and `[ 'Hello', 'Goodbye' ]` to the console on separate lines. When `myOtherWords` is assigned, it's assigned to the same array object as `myWords`; however, when `myWords` gets reassigned to `['Hi', 'Bye']`, `myOtherWords` continues to reference `['Hello', 'Goodbye']`.