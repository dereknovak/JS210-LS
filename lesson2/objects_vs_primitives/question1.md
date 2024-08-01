```js
let myWord = 'Hello';
myWord.concat(' there ');

console.log(myWord);
```

This example will log `Hello` to the console. Although the `concat` method is called on `myWord`, this method simply returns a new string with the calling and argumented values concatenated. Strings are primitive values, and are therefore non-mutating, so myWord still references `'Hello'` on line 4.