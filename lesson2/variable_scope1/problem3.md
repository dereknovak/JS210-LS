```js
let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket);

  let shop2 = function() {
    basket = 'computer';
  };

  const shop3 = () => {
    let basket = 'play station';
    console.log(basket);
  };

  shop1();
  shop2();
  shop3();

  console.log(basket);
}

goShopping();  
```

This example will log `empty`, `play station`, and `computer` to the console on separate lines.

On line 1, global variable `basket` is declared and initialized to the string `'empty'`.

On line 26, the defined `goShopping` function is invoked. Within the function, the value of `basket` is first logged to console, which still references `'empty'`. On line 19, the nested function `shop1` is invoked, which simply reassigns `basket` to `'tv'`, something that is possible due to global variables being accessible throughout the entire program. On line 20, the nested function `shop2` is invoked, which reassigns `basket` again, but to `'computer'`. This is possible due to the same previous reason.

On line 21, the nested function `shop3` is invoked, which instead *declares a new function local variable* `basket` and initializes it to the string `'play station'`. This value is immediately logged to the console. It's important to note here that, when searching for the value of `basket`, JavaScript searches lexically and executes the first variable it finds, that being from the `shop3` function local variable.

Lastly, line 23 outputs the value of `basket`. Because global variable `basket` and function local variable `basket` are 2 different variables, and the function local variable is hidden within a higher-level scope, JavaScript finds the global variable, still referencing the value `'computer'`, and logs it to the console.