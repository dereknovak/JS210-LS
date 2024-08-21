# JS210 'Fundamentals of JavaScript' Study Guide

## Navigation

- [JavaScript Language](#general-terminology)
    - [SQL](#sql-structured-query-language)
    - [Relational Database](#relational-database)
- [Data Types](#data-types)
    - [Primitive Values](#primitive-values)
    - [Reference Objects](#reference-objects)
- [Naming Conventions](#naming-conventions)
    - [Legal](#legal)
    - [Idiomatic](#idiomatic)
- [Variable Scope](#variable-scope)
    - [Lexical Scope](#lexical-scope)
    - [Block-Level](#block-level)
    - [Function-Level](#function-level)
- [Statements vs Expressions](#statements-vs-expressions)
    - [Statement](#statement)
    - [Expression](#expression)
- [Assignment vs Comparison](#assignment-vs-comparison)
    - [Assignment](#assignment)
- [Equality](#equality)
    - [Strict](#strict-equality)
    - [Loose](#loose-equality)
- [Truthiness]
- [Functions](#functions)
    - [Arguments vs Parameters](#arguments-vs-parameters)
    - [Return Value](#return-value)
    - [Declaration vs Expression](#declaration-vs-expression)
    - [Object Passing](#object-passing)
    - [Static vs Instance]
- [Operators](#operators)
    - [`+`](#plus-)
- [Objects](#objects)
- [Hoisting](#hoisting)
    - [Temporal Dead Zone](#temporal-dead-zone)
- [Partial Function Application](#partial-function-application)
- 



# Study Guide
- Specific Topics of Interest
- You should be able to clearly explain the following topics:

    - assignments and comparison
    - primitive values, types and type conversions/coercions
    - object properties and mutation
    - working with Strings, Arrays, and Objects. In particular, you should be thoroughly familiar with the basic - ay iteration methods (forEach, map, filter, and find) and how to use Object methods to access the keys and - ues in an Object as an Array.
    - understand that arrays are objects, and be able to determine whether you have an Array
    - variables as pointers
    - truthiness: false and true vs. falsy and truthy
    - first-class functions
    - pure functions and side effects
    - strict mode vs. sloppy mode
    - JavaScript syntactic sugar

# Data Types

## Primitive Values

```js
'string'           // string
42                 // number
true               // boolean
undefined          // undefined
null               // null
Symbol('foo')      // symbol (ES6)
9007199254740992n  // bigint (ES9)
```

Primitive Values are:
- Immutable
- Are a value type
    - Cannot be referenced by multiple variables

## Reference Objects

```js
{ a: 1, b: 2 }     // simple object
[1, 2, 3]          // array
function foo() {}  // function
new String('foo')  // custom object 
```

Objects are:
- Mutable
- Are a reference type
    - A copy of the reference is shared between variables

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

# Variable Scope
- https://launchschool.com/lessons/7cd4abf4/assignments/0b1349b7

## Lexical Scope
- "The source code defines the scope."
- A variable's scope is **lexical**, being determined by the environment in which it is declared.

## Block-Level

- Variables declared with `let` or `const` are scoped at the *block-level*, which makes them accessible between the `{}` where they are declared. If declared in the program's main scope, the variables are considered **global** and can be accessed throughout the entire program.

```js
let foo = "I'm a global variable"

if (true) {
  console.log(foo)  // Outputs
  let bar = "I'm scoped within this block"
}

console.log(bar)  // Throws a `ReferenceError` exception
```

## Function-Level

- Variables declared with `var` and function declarations are scoped at the *function-level*, which makes them accessible within the function where they are defined. If declared in the program's main scope, the varaibles are considered **global** and can be accessed throughout the entire program.

`var`
```js
function foo() {
  if (true) {
    var test = 'Successful';
  }

  console.log(test)  // Outputs
}

foo();
```

`function`
```js
function foo() {
  if (true) {
    function bar() {
      console.log('Test successful');
    }
  }

  bar();  // Outputs
}

foo();
```
  
# Statements vs Expressions

## Statement

- A **statement** is a string of executable code that uses specific JavaScript keywords. While a statement can include multiple expressions, the statement itself does not capture a value.

- Complete list of statements: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements

```js
let foo = 'foo';  // statement

console.log(foo = 'foo');      // Outputs 'bar'
console.log(let foo = 'foo');  // Throws a `SyntaxError` exception
```

## Expression

- An **expression** is any executable code that returns a value.

```js
1 + 1 === 2   // expression
'a' + 'b'     // expression
firstWord     // expression (returns its value)
```

# Functions
- https://launchschool.com/lessons/7cd4abf4/assignments/067955f4

- A **function** is a block of code that is saved and can be and called from another part of the program. In JavaScript, functions are *first-class objects*, allowing them to be easily passed around throughout the codebase.

## Arguments vs Parameters

- Function **arguments** are values that get passed into a function invocation. These values are then bound to the functions's **parameters**, which are defined variables that act as placeholders for variables used within the function. Both are assigned within parentheses; however, arguments exist at the function invocation while parameters exist at the function definition.

```js
function add(num1, num2) {  // parameters
  return num1 + num2;
}

add(7, 3);  // arguments
```

## Return Value

- Every function in JavaScript returns `undefined` by default; however, an explicit value can be returned from the function using the `return` keyword, immediately terminating the function and returning its argumented value.

```js
function foo() {
  console.log('I will output!');
  return 'bar';
  console.log('I will not!');
}

let returnedValue = foo();
returnedValue;  // 'bar'
```

## Declaration vs Expression

- Functions can either be defined using a function **declaration** or an **expression**.

### Declaration

- A **function declaration** defines a function using the `function` keyword, declaring a named variable and initializing it to the referenced function. Only functions that are declared with `function` and have *no preceding characters* are considered a declaration.

```js
function foo() {
  console.log("I've been declared!");

  function bar() {
    console.log("Me too!");
  }
}
```

### Expression

- Any function that is not a function declaration is considered a **function expression**. These can include anonymous functions as well as those built using *arrow notation*.

```js
let foo = function() {
  console.log("I've been expressed!");
}

let bar = () => {
  console.log("Me too!");
}
```

## Object Passing

### Pass-by-Value

- When passing a primitive value into a function, JavaScript exhibits a **pass-by-value** object passing strategy by passing a *copy* of the original value into the function, preventing it from being mutated.

```js
function capitalize(string) {
  string[0] = string[0].toUpperCase;
}

let foo = 'foo';
capitalize(foo);

foo;  // foo
```

### Pass-by-Reference

- When passing an object into a function, JavaScript exhibits a **pass-by-reference** object passing strategy by passing a copy of the *reference* to the original object into the function, allowing it to be mutated.

```js
function removeLastElement(array) {
  array.pop();
}

let arr = ['a', 'b', 'c'];
removeLastElement(arr);

arr;  // ['a', 'b']
```

# Assignment vs Comparison

## Assignment

- JavaScript uses the `=` operator to assign a reference to a value or object, either as an initialization or a reassignment.

### Primitive Values

- When assigning a value referenced by a variable to another variable, a *copy* of the value is created, to which the new variable will reference.

```js
let a = 'hello';
let b = a;
```

Here, `a` and `b` reference two *different* strings with the same value of `'hello'`.

### Reference Objects

- When assigning an object referenced by a variable to another variable, a *copy of the reference* to the object is created, to which the new variable will use. This allows the original object to be mutated using the new variable.

```js
let a = ['a', 'b', 'c'];
let b = a;
```

Here, `a` and `b` reference the *same* array using two different references.

## Comparison

### Strict Equality

- The **strict equality operator** (`===`) is best used when comparing values as both the literal's data and type are compared.

```js
5 === 5    // true
5 === '5'  // false

0 === 0    // true
0 === ''   // false
```

### Loose Equality

- The **loose equality operator** (`==`) compares its operands data, but not its type. This can lead to unexpected results and should be avoided, even if the program is working as intended.

```js
5 == 5;    // true
5 == '5';  // true

0 == 0;    // true
0 == '';   // true
```

# Operators

## Plus (+)

- The `+` operator acts as both an addition and concatenation operator. When used with numbers, JavaScript will return the sum of the operands. When used with strings, JavaScript will return a new string with its operands concatenated.

```js
7 + 3;            // 10
'Fizz' + 'Buzz';  // FizzBuzz 
```

- If one of the operands is a string, the other operand will be *implicitly coerced* into a string, defaulting to concatenation. To avoid unexpected results, it's important to always be explicit with coercions.

```js
7 + '3';   // 73
['a', 'b'] + 'c';  // a,bc
```

- The `+` should never be used with objects, as the results can be unexpected.

```js
[1, 2, 3] + [4, 5, 6];   // 1,2,34,5,6
[1, 2, 3] + 1            // 1,2,31
```

# Objects

- **Objects** are used to organize data and behaviors, defining properties as key-value pairs than can be called using either dot or bracket notation.

```js
const dog = {
  name: 'Fido',
  age: 8,

  speak() {
    console.log('Arf!');
  },
}

dog['name'];  // Fido
dog.age;      // 8
dog.speak();  // Logs 'Arf!'
```


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