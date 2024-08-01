```js
let a = 1;

function foo() {
  a = 2;
  let bar = function() {
    a = 3;
    return 4
  };

  return bar();
}

console.log(foo());
console.log(a);
```
This example will log `4` and `3` to the console on separate lines.

Global variable `a` is first declared and initialized to `1` on line 1. After invoking the `foo` function on line 13, `a` is then reassigned to `2` then reassigned to `3` after invoking the nested `bar` function. Because of this, line 15 logs `3`.

The `bar` function itself returns `4` due to the explicit `return` keyword, and `foo` will return this returned value as well due to its explicit `return`. Therefore, line 13 logs `4` to the console.