```js
var a = 'hello';

for (var index = 0; index < 5; index += 1) {
  var a = index;
}

console.log(a);
```

This example will log `4` to the console.

After hoisting, both declarations of `a` by `var` are hoisted to the top of the program. Because they are the same variable, this does not have any real impact on the program. It's important to note that an error is *not* thrown, despite a duplicate declaration--another reason to avoid using `var`.

At the end of the `for` loop, `a` references `4`, which is what is logged to the console.