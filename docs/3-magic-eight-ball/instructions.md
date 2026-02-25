# Step-by-Step Instructions

These functions are a demonstration of `switch/case` statements and the `ternary` operator in JavaScript. These are commonly used in frontend development, with switch cases being extremely useful for `reducer functions` in `React` and ternaries simplifying rendering logic. Ternaries can also be chained together, which can look messy but be helpful in certain scenarios.

## 1. Magic 8 Ball

We need a random number generator. You can use the `random` function from `Math` to do this.

```javascript
const randomNumber = Math.random();
```

This will generate a number between 0 (inclusive) and 1 (exclusive) such as `0.8120078968245319`. This means it can be 0, but it can never be 1. We can use this clever trick to round it to a whole number between `0` and `n - 1`, where `n` is the number of options we want:

```javascript
const randomNumber = Math.round(Math.random() * 8);
// Generates any number from 0 to 7
```

Now, the function will eventually return a string with one of our responses. We want to avoid an array here, because the purpose is to learn `switch/case` statements. We will create an empty string and reassign it based on our number:

```javascript
let eightBall = '';
```

Now have a go at creating a switch statement. If you want to create your own responses, you'll need to adjust the `validResponses` in the test suite. The basic format for switch case statements is:

```javascript
switch(expression) {
    case <value>:
        // Your code here
        break;
    case <anotherValue>:
        // Your code here
        break;
    default:
        // Your code here
}
```
Make sure you default to some error message, like `Error: Invalid response`, and don't forget to return your response.

### Solution

<details>
  <summary>Reveal</summary>

```javascript
function magicEightBall() {
    const randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';

    switch (randomNumber) {
        case 0:
            eightBall = 'It is certain';
            break;
        case 1:
            eightBall = 'It is decidedly so';
            break;
        case 2:
            eightBall = 'Reply hazy try again';
            break;
        case 3:
            eightBall = 'Cannot predict now';
            break;
        case 4:
            eightBall = 'Do not count on it';
            break;
        case 5:
            eightBall = 'My sources say no';
            break;
        case 6:
            eightBall = 'Outlook not so good';
            break;
        case 7:
            eightBall = 'Signs point to yes';
            break;
        default:
            eightBall = 'Error: Invalid response';
    }

    return eightBall;
}
```
</details>

## 2. Logging the Magic 8 Ball

We're going to log the user's inputs and answer their question using the `magicEightBall`. The first thing we want to do is greet the user. If they provide a name, we will log to the console: 

```
console
    Hello, Jane!
```

If not, we will simply log:

```
console
    Hello!
```

You can use an if statement, or you can try a ternary:

```javascript
expression ? /* Code when true */ : /* Code when false */;
```

<details>
<summary>Hint</summary>

```javascript
const greeting = userName ? `Hello, ${userName}!` : 'Hello!';
console.log(greeting);
```
</details>
<br>

Now lets log the users question, like so:

```
console
    User's question: Is today Tuesday?

```

<details>
<summary>Hint</summary>

```javascript
console.log(`User's question: ${userQuestion}`);
```
</details>
<br>

Finally, let's call our magic ball function and log the output:

```
console
    It is certain
```

<details>
<summary>Hint</summary>

```javascript
console.log(magicEightBall(userQuestion));
```
</details>
<br>

This function doesn't return anything.

### Solution

<details>
  <summary>Reveal</summary>

```javascript
function logMagicEightBall(userQuestion, userName) {
    const greeting = userName ? `Hello, ${userName}!` : 'Hello!';
    console.log(greeting);
    console.log(`User's question: ${userQuestion}`);
    console.log(magicEightBall(userQuestion));
}   
```
</details>

