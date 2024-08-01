```js
let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords);
console.log(myOtherWords);
```

This example will log `[ 'Hi', 'Goodbye' ]` to the console twice, on separate lines.

Unlike primitive values, assignments to array objects is a reference type. Therefore, when `myOtherWords` references the same object as `myWords` on line 2, they are actually referencing the *same object* in memory. When `myWords` is mutated by element reassignment on line 3, this change will affect the references of both variables, as they are the same array objects.