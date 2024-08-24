# JS210 'Fundamentals of JavaScript' Study Guide

## Navigation

- [JavaScript Language](#general-terminology)
    - [SQL](#sql-structured-query-language)
    - [Relational Database](#relational-database)
- [Data Types](#data-types)
    - [Primitive Values](#primitive-values)
    - [Reference Objects](#reference-objects)
    - [typeof](#typeof)
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
- [Coercion](#coercion)
    - [Explicit Coercion](#explicit-coercion)
    - [Implicit Coercion](#implicit-coercion)
- [Assignment vs Comparison](#assignment-vs-comparison)
    - [Assignment](#assignment)
    - [Comparison](#comparison)
        - [Strict](#strict-equality)
        - [Loose](#loose-equality)
        - [Inequality](#inequality)
- [Truthiness](#truthiness)
    - [Falsy Values](#falsy-values)
    - [Nullish Coalescing Operator](#nullish-coalescing-operator)
- [Functions](#functions)
    - [Arguments vs Parameters](#arguments-vs-parameters)
    - [Return Value](#return-value)
    - [Declaration vs Expression](#declaration-vs-expression)
    - [Object Passing](#object-passing)
    - [Static vs Instance](#static-vs-instance)
    - [First-Class Objects](#first-class-objects)
    - [Spread Syntax](#spread-syntax)
    - [Rest Syntax](#rest-syntax)
    - [arguments](#arguments)
- [Operators](#operators)
    - [`+`](#plus-)
- [Objects](#objects)
    - [Properties](#properties)
    - [Arrays](#arrays)
        - [Sparse Arrays](#sparse-arrays)
    - [Iteration]
        - [Array]
        - [Object]
- [Hoisting](#hoisting)
    - [Temporal Dead Zone](#temporal-dead-zone)
- [Partial Function Application](#partial-function-application)
- [Side Effects](#side-effects)
    - [Pure Functions](#pure-functions)
- [Strict Mode](#strict-mode)
    - [Pragma](#pragma)
- [Syntactic Sugar](#syntactic-sugar)

# Study Guide

- working with Strings, Arrays, and Objects. In particular, you should be thoroughly familiar with the basic - ay iteration methods (forEach, map, filter, and find) and how to use Object methods to access the keys and - ues in an Object as an Array.
- variables as pointers

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

## typeof

- A data type can be checked using the `typeof` operator alongside the data literal. This returns a string representation of the data type.

```js
typeof 24;             // 'number'
typeof 'Dog';          // 'string'
typeof false;          // 'boolean'
typeof {};             // 'object'
typeof undefined;      // 'undefined'
typeof function() {};  // 'function'


// Unexpected Behavior

typeof [];             // 'object'
typeof null;           // 'object'
typeof NaN;            // 'number'
```

- For arrays, `Object.isArray()` can be used to check its object type.

```js
Object.isArray([1, 2, 3]);       // true
Object.isArray({ a: 1, b: 2 });  // false
```

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
let foo = "I'm a global variable";

if (true) {
  console.log(foo);  // Outputs
  let bar = "I'm scoped within this block";
}

console.log(bar);  // Throws a `ReferenceError` exception
```

## Function-Level

- Variables declared with `var` and function declarations are scoped at the *function-level*, which makes them accessible within the function where they are defined. If declared in the program's main scope, the varaibles are considered **global** and can be accessed throughout the entire program.

`var`
```js
function foo() {
  if (true) {
    var test = 'Successful';
  }

  console.log(test);  // Outputs
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

# Truthiness
- https://launchschool.com/books/javascript/read/flow_control#truthiness

## Falsy Values

```js
false
undefined
null
NaN
''
0
```

- Everything else is considered *truthy*

Notable truthy values:

```js
'false'  // A string
[]       // Empty array is a construct
{}       // Empty object is a construct 
```

## Nullish Coalescing Operator

- The **nullish coalescing operator** evalutates its right operand if the left operand is *nullish* (`null` or `undefined`). This is different than the `||` logical operator, which checks for a *falsy* value instead.

```js
let array = ['a', 'b', 'c'];

array[3] ?? "Element not present!";
```

Here, `'Element not present!'` is returned as the requested index of `array` does not exist.

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

## Static vs Instance

### Static

- A **static method** is called directly on the class, producing different results based upon the method's argument.

```js
let dog = {
  name: 'Fido',
  age: 7,
}

Object.keys(dog);  // [ 'name', 'age' ]
```

### Instance

- An **instance method** is called on the object, or instance, of a class. Most methods in JavaScript fall into this category.

```js
'hello world'.toUpperCase();
['a', 'b', 'c'].reverse();
```

## First-Class Objects
https://launchschool.com/lessons/7cd4abf4/assignments/0ea7c745

1. Assign it to a variable or an element of a data structure
2. Pass it as an argument
3. Return it from a function

```js
function add(num1, num2) {
  return num1 + num2;
}

function makeAdder(num1) {
  return function(num2) {
    return add(num1, num2);
  }
}
```

# Coercion

## Explicit Coercion

- When comparing different primitive values, the values should be **explicitly coerced** to the appropriate data type as relying on JavaScript's *implicit coercion* can be both unreliable and may make the code more challenging to debug.

### To String

```js
String(24);              // '24'
String([1, 2, 3]);       // '1,2,3'
String({ a: 1, b: 2 });  // '[object Object]'
String(false);           // 'false
```

## To Number

```js
Number('24');      // 24
Number('hello');   // NaN
Number('1hello');  // NaN
Number(false);     // 0

parseInt('24');      // 24
parseInt('hello');   // NaN
parseInt('1hello');  // 1
parseInt(false);     // NaN
```

## Implicit Coercion

- Many of the operators in JavaScript, when used with different operand data types, will **implicitly coerce** one of the values so to not throw an exception. Relying on such coercion, however, is not recommended, as it can be both unreliable and may make the code more challenging to debug.

```js
1 + '2' === '12'        // `1` is coerced to a string
0 == false === true     // `false` is coerced to `0`
10 / true === Infinity  // `true` is coerced to `1`
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

### Inequality

- Numbers are compared in a predictable way. For strings, each character is compared one at a time until an inequality is found, or one string ends before the other, to which the longer string will be considered greater.

```js
123 > 45        // true
'123' > '45'    // false
'123' > '1234'  // false
```

- The second example returns `false` because `'1'` and `'4'` are compared first, which evaluates to `false`.
- The third example returns `false` because, after all characters are checked, the value's length is compared, with the longer string being considered greater.

## Spread Syntax

- When an unknown amount of arguments are passed into a function invocation, JavaScripts **spread syntax** (`...variableName`) can be used to capture all argument values into an array.

```js
function add(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

add(1, 2);        // 3
add(1, 2, 3) ;    // 6
add(1, 2, 3, 4);  // 10
```

- When used as a variable within the function, an array of all elements is returned. When used with the spread syntax, each element is returned delimited by a comma.

## Rest Syntax

```js
let favorites = ['color', 'red', 'blue', 'green'];
let [type, ...colors] = favorites;

type;    // 'color'
colors;  // ['red', 'blue', 'green']
```

## arguments

- The `arguments` reserved variable references all arguments that have been passed into a function, regardless of any existing parameters. This referenced object is *array-like*, as values can be referenced using indexes; however, many core array behaviors, such as its basic instance methods, are missing that make it unreliable.

```js
function outputLength() {
  console.log(arguments.length);
}

output('Hello', 'world');  // 2
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

## Properties

- A **property** is a key-value pair existing within an object literal whose value can be called using either dot or bracket notation.

See example above.

## Arrays

- An **array** is a data structure made up of an ordered collection of elements. Arrays can exist within other arrays, creating a *nested array*. In JavaScript, arrays are a sub-category of the `Object` class, providing additional functionality such as non-indexed properties and a dynamic length.

```js
let names = ['Bob', 'John', 'Tom'];
names[1];  // 'John'

names['1'] == 'Chuck';
names;     // [ 'Bob', 'John', 'Tom', '-1': 'Chuck' ]
```

### Sparse Arrays

- A **sparse array** is one that has *empty item* slots somewhere within it. Empty slots are created by either increasing the `'length'` property of an array or by setting an index outside of the range of the array.

```js
let colors = ['red', 'blue', 'yellow'];

colors[5] = 'purple';
console.log(colors);  // [ 'red', 'blue', 'yellow', <2 empty items>, 'purple' ]

colors.length = 10;
console.log(colors);  // [ 'red', 'blue', 'yellow', <2 empty items>, 'purple', <4 empty items> ]
```

# Hoisting

- **Hoisting** is a mechanism that brings variable, function, and class declarations to the top of their respective scope before a program is executed. While this feature does not actually change the code, but is instead a result of the program's *creation phase*, it's a great mental model to help understand why JavaScript executes code in this unusual manner.

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

- **Partial Function Application** is the process in which a function is defined that calls a second function, accepting less arguments than that function expects. This is achieved through the use of pre-determined values to use as the remaining arguments upon invocation of the partial function.

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

# Side Effects
https://launchschool.com/lessons/79b41804/assignments/88138dd5

1. A non-local variable is reassigned

```js
function addTen() {
  num + 10;
}

let num = 7;
addTen();
```

2. A non-local variable is mutated

```js
function reverseNumbers(numbers) {
  numbers.reverse();
}

let arr = [1, 2, 3];
reverseNumbers(arr);
```

3. A non-local data entity is read or written to

```js
function greet(greeting, name) {
  console.log(greeting + ', ' + name);
}

greet('Hello', 'John');
```

4. An exception is raised
5. A different function is called with side-effects

## Pure Functions

1. Does not have any side effects
2. Same return for the same argument every time over its lifetime

Good:
```js
function add(num1, num2) {
  return num1 + num2;
}

add(4, 7);  // Will always return the same result
```

Bad:
```js
function add(num2) {
  return num1 + num2
}

let num1 = 7;
add(4);  // `num1` could be any number, so the return may be different
```

# Strict Mode
- https://launchschool.com/gists/406ba491

- **Strict Mode** enables a stricter version of JavaScript to execute in specific locations within the codebase. This feature is prompted by the `"use strict"` pragma at the top of its respective environment, throwing additional exceptions for errors that would be otherwise ignored, and is lexically scoped at the *function-level*.

- Can only be used at the top of a program or a function, not within a block.
- Automatically is used within the body of a `class`.
- Lexically scoped

```js
function foo() {
  "use strict";
  // Some code
}

num = 1;
foo();
```

In this example, **strict mode** is only enabled within the `foo` function body. Because of this, the variable assignment on line 6 does not throw an exception despite it not being declared.

## Pragma
- "The `"use strict"` statement is an example of a **pragma**, a language construct that tells a compiler, interpreter, or other translator to process the code in a different way.

# Syntactic Sugar
https://launchschool.com/gists/2edcf7d7

## Concise Property Initializers

- To avoid repetition, JavaScript *syntactic sugar* allows for quick assignment of property key-value pairs by including only the variable name, returning the variable as the key and its referenced value as the value.

```js
function setObject(foo, bar, qux) {
  return {
    foo,
    bar,
    qux,
  };
}

let var1 = 'foo';
let var2 = 'bar';
let var3 = 'qux';

setObject(var1, var2, var3);
// { foo: 'foo', bar: 'bar', qux: 'qux' }
```

## Concise Methods

- To avoid clutter within an object, JavaScript *syntactic sugar** allows a function to simply be defined within the object without the need of a property key; the key uses the name of the function while its value is the function itself.

```js
let dog = {
  name: 'Fido',
  age: 7,

  speak() {
    console.log('Arf!');
  },
}

dog.speak();  // Arf!
```

## Object Destructuring

```js
let dog = {
  name: 'Fido',
  breed: 'Collie',
  age: 7,
}

let { name, breed, age: yearsOld } = dog;
name;   // 'Fido'
breed;  // 'Collie'
yearsOld;    // 7
```

## Array Destructuring

```js
let colors = ['red', 'blue', 'green']
let [ shirt, pants, shoes ] = colors;

shirt;  // 'red'
pants;  // 'blue'
shoes;  // 'green'
```