```js
let myWord = 'Hello';
let myOtherWord = myWord;
myWord = 'Goodbye';

console.log(myWord);
console.log(myOtherWord);
```

This example will log `Goodbye` and `Hello` to the console on separate lines.

Although `myOtherWord` appears to reference `myWord` on line 2, this instruction tells `myOtherWord` to reference an string with the *same value* as `myWord`. Therefore, when `myWord` is reassigned to `'Goodbye'` on line 3, this new reference does not affect `myOtherWord`, which will continue to reference `'Hello'`.