```js
let apples = 3;
let bananas = '3';

if (apples === bananas) {
  console.log('Same number of apples and bananas!');
}
```

Contrary to the previous exercise, this example will no longer log any value to the console. This is due to the *strict equality operator* used within the conditional, which checks that both the value **and** the data type are the same. Because `3` and `'3'` are not the same type, `false` is returned from the expression and the branch is not followed.