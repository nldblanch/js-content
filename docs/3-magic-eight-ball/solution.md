## Solution 1: Magic 8 Ball

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

## Solution 2: Logging the Magic 8 Ball

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
