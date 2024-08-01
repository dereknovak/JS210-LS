```js
console.log(a);

let a = 1;
```

This example will throw a `ReferenceError` due to `a` not being initialized.

Due to hoisting, global variable `a` exists in the **Temporal Dead Zone**, meaning that JavaScript knows that it exists on line 1, but it is unset and cannot be accessed. You can see the difference between it being unset and not existing all together by running the code without the declaration syntax at all, which instead returns a `ReferenceError` that specifies that `a` is not defined.:

```js
console.log(a);
```