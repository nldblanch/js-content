# Arrow Functions

In 2015 there was a major revision to JavaScript called ECMAScript 2015 (more commonly known as ES6). As part of this revision, arrow functions were introduced, a concise syntax for writing functions in JavaScript. They are now widely used for short, functional-style code.

## Basic Walkthrough (quick read)

### Ordinary function

```javascript
function add(a, b) {
    return a + b;
}
```

### Arrow function 

```javascript
const add = (a, b) => {
    return a + b;
}
```

### Arrow function with single param

```javascript
const square = x => {
    return x * x;
}
```

### Arrow function with implicit return

```javascript
const square = x => x * x;
```

### Arrow function without name declaration

```javascript
const arr = [1, 2, 3];
const squaredArr = arr.map(num => num * num);
console.log(squaredArr); 
/* 
console:
    [1, 4, 9]
*/
```

## In Depth Walkthrough (long read)

### Implicit vs explicit return

- Implicit return (single expression, no braces):

```javascript
const greet = name => `Hello, ${name}!`;
```

- Explicit return (with braces):
```javascript
const greet = name => {
    return `Hello, ${name}!`;
}
```

To return an object literal with implicit return, wrap it in parentheses:
```javascript
const obj = () => ({ value: 42 });
```

### Lexical `this`

Arrow functions do not have their own `this`. They capture `this` from the surrounding (lexical) scope. This is useful in callbacks:
```javascript
function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds += 1 // `this` refers to Timer instance
    }, 1000);
}
```

Contrast with regular function where `this` can change:

```javascript
const that = {
    value: 1,
    incLater: function() {
        setTimeout(function() {
            // `this` refers to the current function, not `that` object
        }, 100);
    }
}
```

Because arrow functions bind `this` lexically, they are handy inside callbacks where you want the outer `this`.

### No `arguments`, not constructible

- Arrow functions do not have their own `arguments` object. Use rest parameters instead:
```javascript
const fn = (...args) => args
```

- Arrow functions cannot be used as constructors (can't use `new`) and have no `prototype`.

### When not to use arrow functions

- Object methods that rely on dynamic `this` (use regular functions).
- Constructor functions (use `function`).
- When you need the `arguments` object (use rest params or normal functions).

### Common use cases

- Array helpers:
```javascript
const doubled = [1,2,3].map(n => n * 2);
```

- Short callbacks:
```javascript
setTimeout(() => console.log('done'), 1000);
```

- Inline event handlers (careful with `this`):
```javascript
element.addEventListener('click', (e) => { 
    e.preventDefault();
    console.log(e.target.value); // Logs value of HTML Element    
});
```

### Examples

- Map / filter:
```javascript
const nums = [1,2,3,4];
const evens = nums.filter(n => n % 2 === 0); // [2, 4]
const squares = nums.map(n => n * n); // [1, 4, 9, 16]
```

- Returning object:
```javascript
const makeUser = (name) => ({ name, created: Date.now() });
const user = makeUser('Jane');
console.log(user); 
/*
console
    {
        name: 'Jane',
        created: 1762437983853
    }
*/
```

- Rest parameters:
```javascript
const join = (...parts) => parts.join('-')
const joinedLetters = join(['a', 'b', 'c']);
console.log(joinedLetters); // a-b-c
```

### Best practices

- Prefer arrow functions for small, stateless functions and callbacks.
- Use regular functions for object methods that need `this` or when you need `new`.
- Keep arrow function bodies short; move complex logic into named functions for readability.
- Use parentheses around parameters when there are zero or multiple parameters, or for clarity.

### Further reading

- MDN: Arrow function expressions — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- ECMAScript 2015 (ES6) specification notes