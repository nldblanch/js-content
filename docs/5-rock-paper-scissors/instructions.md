# Step-by-Step Instructions

This is more of a fun one - there won't be any TDD involved, but there are tests. You should be using skills you've already learned, so have a go at solving it based on the documentation, and if you get stuck, you can refer to this guide. It will comprise of key considerations and hints to get you there.

## 1. getUserChoice

### What if the input isn't a string?

<details>
<summary>Hint</summary>

```javascript
if (typeof userInput !== 'string') {
    console.log('Error! Must enter a string.')
    return;
}
```

</details>

### Have you checked that the input is a valid option?

<details>
<summary>Hint</summary>

```javascript
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
}
```

</details>

### How do you handle the user inputting capital letters?

<details>
<summary>Hint</summary>

```javascript
userInput = userInput.toLowerCase();
```

</details>

### What happens if the input doesn't match a valid option?

<details>
<summary>Hint</summary>

```javascript
console.log('Error! Invalid choice.');
return;
```

</details>

### Solution

<details>
<summary>Reveal</summary>

```javascript
const getUserChoice = userInput => {
    if (typeof userInput !== 'string') {
        console.log('Error! Must enter a string.')
        return;
    }
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }
    console.log('Error! Invalid choice.');
};
```

</details>

## 2. getComputerChoice

### How many options does your random number need to be?

<details>
<summary>Hint</summary>

```javascript
const randomNumber = Math.floor(Math.random() * 3);
```

</details>

### How can you return different options based on the number?

<details>
<summary>Hint</summary>

```javascript
switch (randomNumber) {
    case 0:
        return 'rock';
    case 1:
        return 'paper';
    case 2:
        return 'scissors';
    default:
        return 'rock';
}
```

</details>

### Solution


<details>
<summary>Reveal</summary>

```javascript
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return 'rock';
    }
};
```

</details>

## 3. determineWinner

### What to do when userChoice matches computerChoice?

<details>
<summary>Hint</summary>

```javascript
if (userChoice === computerChoice) {
    return 'The game is a tie!';
}
```
</details>

### What to do when user chooses rock?

They either lose or win. Do you remember the shortened, inline way of writing conditional statements?

<details>
<summary>Hint</summary>

```javascript
if (userChoice === 'rock') {
    return computerChoice === 'paper' ? 'The computer won!' : 'You won!';
}
```
</details>

### What to do when user chooses paper?

<details>
<summary>Hint</summary>

```javascript
if (userChoice === 'paper') {
    return computerChoice === 'scissors' ? 'The computer won!' : 'You won!';
}
```
</details>

### What to do when user chooses scissors?

<details>
<summary>Hint</summary>

```javascript
if (userChoice === 'scissors') {
    return computerChoice === 'rock' ? 'The computer won!' : 'You won!';
}
```
</details>

### What if someone tries to give invalid options?

<details>
<summary>Hint</summary>

```javascript
return 'Error: invalid choices';
```
</details>

### Solution

<details>
<summary>Reveal</summary>

```javascript
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'You won!';
    }

    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }

    if (userChoice === 'rock') {
        return computerChoice === 'paper' ? 'The computer won!' : 'You won!';
    }

    if (userChoice === 'paper') {
        return computerChoice === 'scissors' ? 'The computer won!' : 'You won!';
    }

    if (userChoice === 'scissors') {
        return computerChoice === 'rock' ? 'The computer won!' : 'You won!';
    }

    return 'Error: invalid choices';
};
```

</details>


## 4. Bonus

Have a go at adding your own little cheat code for the user. Add a secret `bomb` option that only the user can choose. You'll need to consider two things:
- What do you need to do to add `bomb` as a valid input?
- How do need to change the win determination? Is there a quick way?

### Solution

<details>
<summary>Reveal</summary>

```javascript
const getUserChoice = userInput => {
    // code before...

    if (userInput === 'bomb' || userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }

    // code after...
}
```

```javascript
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'You won!';
    }

    // rest of your code...
}
```

</details>

## 5. Run the game!

Don't forget to run your game in the console. There is a script written out for you already:

```bash
npm run play
```

Enjoy!