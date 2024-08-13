- Data Types
    - Primitives
    - Objects
        - Simple Objects
        - Arrays
        - Dates
        - Functions
- Nullish Coalescing Operator
    - https://launchschool.com/books/javascript/read/flow_control
    - `??`
    - Nullish means `null` or `undefined`
- Switch
    - https://launchschool.com/books/javascript/read/flow_control
    - Similar, but different than `case` statements
    - Fall-throughs
- Increment/Decrement Operator
    - ++/--
    - Before variable increments, but returns old value
    - After variable increments and returns new value
    - Should be avoided, use +=/-= instead
- do loop
    - Always performs loop once
- continue
    - Same as `next` in Ruby
- forEach
    - same as `#each`
- Arrow functions
- Template Literal
    - Using `` to interpolate values into a string
- `push` returns the new array length
- `filter`
    - Similar to `#select`
- Element reference with the bracket notation
    - `arr[1][3]`
- Objects
    - Same as Ruby hashes
    - To reference a string, can either use
        - dot notation
            - `person.name`
        - bracket notation
            - person['name']
        - Can also use these notations for assignment
    - `delete` keyword to delete a key/value
- Iterate over an Object
    - `for (let property in variable) {}`
    - Iterates over the prototypes as well
- `keys` and `values` methods are static
- `for/of`
    - Better to use this with an array
    - https://launchschool.com/books/javascript/read/more_stuff
- `?.` returns the entire chain as `undefined` if the value is nullish
    - "Optional Chaining"
    - https://launchschool.com/books/javascript/read/more_stuff
- regex
    - `test` returns `true` or `false`
    - `match` returns matched values or `null`
    - Weird problem in book...look into this
- Bracket notation **is an operator**, not a method
- Modulo Operator
    - Not a modulo, but a *remainder* operator
    - 10 % -3 === -2
- When coerced into a number, `true` is `1` and `false` is `0`.
- Addition operator converts to string if one operand is a string
    - All other operators will always convert to integer.
- Arguments are not only the specified values at a function's invocation, but also the parameters used within the function's body
- If JS cannot find a variable within a block scope that it is attempting to reassign, it will automatically create a new global variable (NOT GOOD!!)
- Look into this again:
    - In this section, we were explicit to refer to the anonymous function assigned to a variable. In the wild, however, many developers refer to anonymous functions by the name of the variable to which it is assigned. For instance, instead of saying the "anonymous function assigned to foo returns..", we can instead say the "function foo returns..". While at Launch School and in job interviews, use the former, more precise, wording. You can also leave out "anonymous" unless it is relevant.
    - https://launchschool.com/lessons/7cd4abf4/assignments/5cb67110
- Learn the differences between a function declaration/expression
- When referencing with `myOtherWord = myWord`, both variables point to an object of the same value **but not the same object**
- Look up *reference type* (question 3)
    - https://launchschool.com/lessons/7cd4abf4/assignments/23776776

##########################

SPOT session with JD

- PFA
    - Primary method that needs to be invoked
    - Presupply it with arguments
    - 3 components
        - Primary
        - Applicator
        - Generator
            - Supply all additional non-supplied arguments
    - Method passing with fewer arguments than what you need in the future
- Create list of legal/idiomatic naming conventions

############

SPOT session with Laren

# Study Guide
// Specific Topics of Interest
// You should be able to clearly explain the following topics:

// assignments and comparison
// variable scope, especially how variables interact with function definitions and blocks
// function scope
// hoisting
// primitive values, types and type conversions/coercions
// object properties and mutation
// understand the differences between loose and strict equality
// how passing an argument into a function may or may not permanently change the value that a variable contains or points to
// working with Strings, Arrays, and Objects. In particular, you should be thoroughly familiar with the basic Array iteration methods (forEach, map, filter, and find) and how to use Object methods to access the keys and values in an Object as an Array.
// understand that arrays are objects, and be able to determine whether you have an Array
// variables as pointers
// console.log vs return
// truthiness: false and true vs. falsy and truthy
// function definition and function invocation
// function declarations, function expressions, and arrow functions
// implicit return value of function invocations
// first-class functions
// partial function application
// naming conventions (legal vs idiomatic)
// pure functions and side effects
// strict mode vs. sloppy mode
// JavaScript syntactic sugar

Strict vs Idiomatic

function foo(condition) {
  // var qux;
  console.log(bar);

  qux = 0.5772;

  if (condition) {
    var qux = 3.1415; 
    console.log(qux);  
  } else {
    var bar = 24;  // 24

    var xyzzy = function() {
      var qux = 2.7183;
      console.log(qux); // 2.718
    };

    console.log(qux); // .5772
    console.log(xyzzy()); // undefined
  }

  qux = 42; 
  console.log(qux); // 42 
}

Strict Mode vs Sloppy Mode
- Prevents/Illiminate silent error
- Checks naming conventions
- "use strict"
- Pragma
- Classes and some module use automatically

First Class Function
// 1. assign to variable
// 2. pass as an arg
// 3. return it

####################

- Side Effects:
    - Reassigns non-local variable
    - mutates the values of a non-local variable
    - Reads/writes any non-local program data
    - Raises an exception
    - Calls another function that has side effects
- Pure Functions:
    - No side effects
    - Same return for the same argument every time over its lifetime

20 questions, 3 hrs

```js
function greeting(personName) {
  return function(say) {
    console.log(`${say} ${personName}`);
  }
}

let greetDerek = greeting('Derek');

greetDerek('hello');
```
