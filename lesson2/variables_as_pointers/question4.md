```js
let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye']

console.log(myWords);
console.log(myOtherWords);
```

This example will log `[ 'Hi', 'Bye' ]` and `[ 'Hello', 'Goodbye' ]` to the console on separate lines.