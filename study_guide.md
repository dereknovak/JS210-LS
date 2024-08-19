# Study Guide
- Specific Topics of Interest
- You should be able to clearly explain the following topics:

- assignments and comparison
- variable scope, especially how variables interact with function definitions and blocks
- function scope
- hoisting
- primitive values, types and type conversions/coercions
- object properties and mutation
- understand the differences between loose and strict equality
- how passing an argument into a function may or may not permanently change the value that a variable contains - points to
- working with Strings, Arrays, and Objects. In particular, you should be thoroughly familiar with the basic - ay iteration methods (forEach, map, filter, and find) and how to use Object methods to access the keys and - ues in an Object as an Array.
- understand that arrays are objects, and be able to determine whether you have an Array
- variables as pointers
- console.log vs return
- truthiness: false and true vs. falsy and truthy
- function definition and function invocation
- function declarations, function expressions, and arrow functions
- implicit return value of function invocations
- first-class functions
- partial function application
- naming conventions (legal vs idiomatic)
- pure functions and side effects
- strict mode vs. sloppy mode
- JavaScript syntactic sugar

# Primitive Values

- string
- number
- boolean
- undefined
- null
- symbols (ES6)
- Big Integers (ES9)

# Objects

- simple object
- array
- function
- custom object

# Naming Conventions

- Legal
- Idiomatic

# Function Declaration vs Expression



# Hoisting

- Hoisting is a mechanism that brings variable, function, and class declarations to the top of their respective scope before a program is executed.

```js
greet('Hello');

function greet(message) {
  console.log(message + ' ' + name);
  var name = 'Derek'
}

// Hello undefined
```

- Hoisting only works with function *declarations*, not function *expressions*.

```js
console.log(greet());

var greet = function() {
  return "Hello!";
}

// TypeError: greet is not a function
```

## Temporal Dead Zone

- While variables declared by `let` and `const` are hoisted before code execution, their value remains unset, placing their reference in a sort of **temporal dead zone**.

```js
console.log(greeting);
// ReferenceError: greeting is not defined
```

```js
console.log(greeting);
let greeting = 'hello';
// ReferenceError: Cannot access 'greeting' before initialization.
```

```js
console.log(greeting);
var greeting = 'hello';
// undefined
```

# Partial Function Application

https://launchschool.com/lessons/7cd4abf4/assignments/0ea7c745

- "Partial function application refers to the creation of a function that can call a second function with fewer arguments than the second function expects."
- "Partial function application requires a reduction in the number of arguments you have to provide when you call a function."

```js
function greet(greeting, person) {
  console.log(greeting + ', ' + person);
}

function greetingGenerator(greeting) {
  return function(person) {
    greet(greeting, person);
  }
}

let sayHello = greetingGenerator('Hello');
let sayGoodbye = greetingGenerator('Goodbye');

sayHello('Derek');
sayGoodbye('Josh');
```

# Strict Mode
- https://launchschool.com/gists/406ba491

- Can only be used at the top of a program or a function, not within a block.
- Automatically is used within the body of a `class`.
- Lexically scoped

## Pragma
- "The `"use strict"` statement is an example of a **pragma**, a language construct that tells a compiler, interpreter, or other translator to process the code in a different way.