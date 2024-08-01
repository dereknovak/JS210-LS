```js
  console.log(a);

  var a = 1;
```

This example will log `undefined` to the console.

This is a result of hoisting, which brings all declared functions and variables declared by `var` to the top of the program before execution. While it brings the variables to the top, it does *not* bring any expressions that are tied to them, which in this case would mean `a = 1` remains at line 3. Because of this, on line 1, JavaScript sees that `a` exists, but that its reference is undefined, so this is what gets logged to the console.

For clarity, this is what the code appears to look like due to hoisting:

```js
var a;
console.log(a);

a = 1;
```