```js
let myWords = ['Hello']
mywords.concat(['Goodbye'])

console.log(myWords);
```

This example will log `[ 'Hello' ]` to the console.

Although array objects are mutable, the `concat` method does not mutate the calling object, but instead returns a new object. Therefore, the original value of `myWords` is unchanged and logged to the console on line 4.