```js
let myWords = ['Hello'];
myWords[0] = myWords[0].toUpperCase();

console.log(myWords);
```

This example will log `[ 'HELLO' ]` to the console.

Although the `toUpperCase` method is non-mutating and its calling value `'Hello'` primitive, the `myWords` array object *is mutated* due to the element reassignment operator `[] =`, which reassigns the element at index `0` to the return value of `toUpperCase`, which is `'HELLO'`.

So, when logging the value of `myWords` to the console on line 4, the original array is seen with this new string as its first element.