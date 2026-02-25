
# Function Documentation

## What's Included

1. [getUserChoice](#getuserchoice)  
2. [getComputerChoice](#getcomputerchoice)  
3. [determineWinner](#determinewinner)  
4. [playGame](#playgame)

## getUserChoice

Normalizes and validates a user's input.

### Syntax
```javascript
getUserChoice(userInput)
```

#### Parameters
`userInput`

A string representing the users input from the console interface.

#### Return value

A string from one of the following options:
- `rock`
- `paper`
- `scissors` 
- `bomb`

Returns `undefined` when invalid.

### Example Usage

```javascript
getUserChoice('rock'); // Returns 'rock'
getUserChoice('ROCK'); // Returns 'rock'
getUserChoice('fork');
/*
console
    Error! Invalid choice.

Returns undefined
*/
getUserChoice(); 
/*
console
    Error! Invalid choice.

Returns undefined
*/
```

## getComputerChoice

Generates a computer choice using randomness.

### Syntax
```javascript
getComputerChoice()
```

#### Return value
Returns a string from one of the following options:
- `rock`
- `paper`
- `scissors`

### Example Usage

```javascript
getComputerChoice(); // Returns 'rock'
getComputerChoice(); // Returns 'paper'
getComputerChoice(); // Returns 'scissors'
```

## determineWinner

Compares user and computer choices and returns the outcome of the game.

### Syntax
```javascript
determineWinner(userChoice, computerChoice)
```

#### Parameters
`userChoice`

A string representing the user's choice. It may only be `rock`, `paper` or `scissors`.

`computerChoice`

A string representing the computer's choice. It may only be `rock`, `paper` or `scissors`.

#### Return value

A string from one of the following options:
- `You won!`
- `The computer won!`
- `The game is a tie!` 

```javascript
determineWinner('scissors', 'paper'); // Returns 'You won!'
determineWinner('rock', 'paper'); // Returns 'The computer won!'
determineWinner('paper', 'paper'); // Returns 'The game is a tie!'
```

## playGame

Prompts the user to input their choice and attempts to run one round of the game. If user input is `valid`, it logs the exchange and result. If `invalid`, it prompts the user to try again.

### Syntax
```javascript
playGame()
```

Behavior:
- Prompts the user with readline when run directly
- Logs: user's choice, computer's choice, and the winner
- Does not auto-run during tests (file checks `if (require.main === module)`)

### Testing notes

- Tests mock `readline.createInterface`, `Math.random`, and `console.log`
- Tests validate input normalization, computer choice mapping, winner logic, and console output

### Example Usage

```javascript
playGame();
/*
Enter your choice (rock/paper/scissors): Scissors
You threw: scissors
The computer threw: paper
You won!
*/

playGame();
/*
Enter your choice (rock/paper/scissors):
Error!
Enter your choice (rock/paper/scissors): rock
You threw: rock
The computer threw: rock
The game is a tie!
*/
```