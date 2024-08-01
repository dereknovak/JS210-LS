```js
let myWords = ['Hello'];
myWords[0].toUpperCase();

console.log(myWords);
```

This example will log `[ 'Hello' ]` to the console.

Although the variable `myWords` references an array object, which can be mutated, the `toUpperCase` method is called on its nested element `'Hello'`, which is a primitive value. Primitive values are immutable, and therefore the value is unchanged.