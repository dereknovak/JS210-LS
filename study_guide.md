# JS210 'Fundamentals of JavaScript' Study Guide

## Navigation

- [JavaScript Language](#general-terminology)
    - [SQL](#sql-structured-query-language)
    - [Relational Database](#relational-database)
- [Primitive Values](#primitive-values)
- [Objects](#objects)
- [Naming Conventions](#naming-conventions)
    - [Legal](#legal)
    - [Idiomatic](#idiomatic)
- [Expressions vs Statements]
- [Hoisting](#hoisting)
    - [Temporal Dead Zone](#temporal-dead-zone)
- [Partial Function Application](#partial-function-application)
- 



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

- Primitive Values are:
    - Immutable
    - Cannot be referenced by multiple variables

# Objects

- simple object
- array
- function
- custom object

- Objects are:
    - Mutable
    - Are a reference data

# Naming Conventions

## Legal
- https://launchschool.com/lessons/7377ece4/assignments/4a43f341

- Case-sensitive
- Any length
- Start with a unicode letter, an underscore, or a dollar sign
- Succeeding characters must be unicode letters, numbers, dollar signs, or underscores
- Cannot be a reserved word
    - https://262.ecma-international.org/5.1/#sec-7.6.1.1

Legal:

```
_count
$price
value
my_variable
otherVariable
```

Illegal:

```
1count
my#variable
```

## Idiomatic

### Non-constant Variables

- Use camelCase
- Start with a letter

Examples:
- `employee`
- `number`
- `fizzBuzz`
- `speedOfLight`
- `destinationURL` (`URL` is an acronym)
- `m00n`

### Constructor Variables

- Use PascalCase
- Start with a letter

Examples:
- `Cat`
- `BoxTurtle`
- `FlightlessBird`

### Magic Constant Variables

- All UPPERCASE
- Words separated by `_`.

Examples:
- `TODAY`
- `MINIMUM_AGE`

### Other Constants

- Depending on context and local styles, can use all styles

Examples:
- `employeeOfMonth`
- `HairyCat`
- `ABSOLUTE_PATH`
  
# Statements vs Expressions


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