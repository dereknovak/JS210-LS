Of these 5 functions, functions 2, 3, and 5 are pure functions.

- Function 1 logs to the console, which is a side effect.
- Although Function 2 does not return a value, there are no side effects and the return value of `undefined` is consistent across all arguments, so it's pure.
- Function 3 has no side effects and will always return the same value that's correlated to its respective arguments.
- Function 4 alters the value within the `Math` object, which is a side effect.
- Similar to Function 2, the return for Function 5 will always be the same, therefore it's pure.