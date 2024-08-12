```js
const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop();
  console.log(`popped ${value} from the array`);
  return value + bar + baz;
}

foo(qux);
```

The `foo` function invocation in this example contains 2 side effects:

1. The original array referenced by `qux` is mutated when passed into the method, as `pop` is a destructive method.
2. Text is logged onto the console on line 7, which is writing to a program not native to this file.