# 🎱 Challenge 3: Magic 8 Ball

## Objective

Create a Magic 8 Ball in JavaScript that generates a random answer. If you wish to write your own responses, you will need to change the `validResponses` array in the test suite to reflect your responses.

## Learning Goals

- Work with JavaScript switch/case statements
- Practice functional programming
- Learn the ternary operator

# Function Documentation

## What's Included

1. [magicEightBall](#magiceightball)
2. [logMagicEightBall](#logmagiceightball)

## magicEightBall

The `magicEightBall` method generates and returns a random string, mimicking the basic functionality of a Magic 8 Ball. 

### Syntax

```javascript
magicEightBall();
```

#### Return value
One of the following strings: 
    - It is certain
    - It is decidedly so
    - Reply hazy try again
    - Cannot predict now
    - Do not count on it
    - My sources say no
    - Outlook not so good
    - Signs point to yes

When the random number does not match one of the switch/case blocks, it should return `Error: Invalid response`.

### Example Usage

```javascript
magicEightBall(); // Returns 'My sources say no'
magicEightBall(); // Returns 'Signs point to yes'
magicEightBall(); // Returns 'It is certain'
```

## logMagicEightBall

The `logMagicEightBall` method receives a user's name and a question, responding to the user through the console and generating an answer using the `magicEightBall` method. 

### Syntax

```javascript
logMagicEightBall(userQuestion, userName);
logMagicEightBall(userQuestion)
```

#### Parameters

`userQuestion`

A string containing the user's question.

`userName`

An optional string representing the user's name.

#### Return value

Returns `undefined`.

### Example Usage

```javascript
    logMagicEightBall('Will I succeed?'); 
    /* 
    console.log
        Hello!
        User's question: Will I succeed?
        Outlook not so good
    */
    logMagicEightBall('Is today the day?', 'Brian')
    /* 
    console.log
        Hello, Brian!
        User's question: Is today the day?
        It is decidedly so
    */
```
