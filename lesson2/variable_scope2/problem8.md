```js
var a = 'global';

function checkScope() {
  var a = 'local';
  const nested = function() {
    var a = 'nested';
    let superNested = () => {
      a = 'superNested';
      return a;
    };

    return superNested();
  };

  return nested();
}

console.log(checkScope());
console.log(a);
```

supernested
global

This example will log `supernested` and `global` to the console on separate lines.

Global variable `a` is declared and initialized on line 1 and never has any reassignments throughout the defined `checkScope` function. Although line 8 appears like a reassignment, this reassigns the local variable `a` declared on line 6, instead. Because of this, line 19 logs `global` to the console.

Because of the reassignment on line 8, its value of `'superNested'` is returned from the `superNested` function, which is then returned from the `nested` function, and finally the `checkScope` function. This is then passed as an argument to the `log` method and logged to the console on line 18.