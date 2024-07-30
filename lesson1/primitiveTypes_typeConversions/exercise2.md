```js
let x = '13';
let y = 9;

console.log(x * y);
```

The value logged to the console will be a number. This is because all numeric operators *except* the addition operator will attempt to coerce its values to numbers before evaluating. In this case, `'13'` is coerced to `13`, then multiplied by `9`, logging `117` to console.