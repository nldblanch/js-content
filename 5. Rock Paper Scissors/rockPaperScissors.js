const readline = require("readline");

const getUserChoice = (userInput) => {
  // Your code here
  if (!userInput) {
    console.log("Error!");
    return undefined;
  }

  if (typeof userInput !== "string") {
    console.log("Error!");
    return undefined;
  }

  if (userInput.toLowerCase() === "rock") {
    return "rock";
  }

  if (userInput.toLowerCase() === "paper") {
    return "paper";
  }

  if (userInput.toLowerCase() === "scissors") {
    return "scissors";
  }

  if (userInput.toLowerCase() === "bomb") {
    return "bomb";
  }

  console.log("Error!");
  return undefined;
};

const getComputerChoice = () => {
  // Your code here
  // Generate random number between 0 and 2
  const randomNumber = Math.floor(Math.random() * 3);

  const rockPaperScissorsOptions = ["rock", "paper", "scissors"];

  return rockPaperScissorsOptions[randomNumber];
};

const determineWinner = (userChoice, computerChoice) => {
  // Your code here
  const tieMessage = "The game is a tie!";
  const winMessage = "You won!";
  const failMessage = "The computer won!";
  const errorMessage = "Error: invalid choices";

  // BOMB cheat code

  if (userChoice === "bomb") {
    return winMessage;
  }

  if (computerChoice === "bomb") {
    return failMessage;
  }

  // Tie
  if (userChoice === computerChoice) {
    return tieMessage;
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return failMessage;
    }
    if (computerChoice === "scissors") {
      return winMessage;
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return failMessage;
    }

    if (computerChoice === "rock") {
      return winMessage;
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return failMessage;
    }

    if (computerChoice === "paper") {
      return winMessage;
    }
  }

  // none of the above conditions were met. Thus INVALID INPUT.
  return errorMessage;
};

const askQuestion = (question) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
};

const playGame = async ({
  askFn = askQuestion,
  getUserChoiceFn = getUserChoice,
  getComputerChoiceFn = getComputerChoice,
  determineWinnerFn = determineWinner,
} = {}) => {
  let userChoice;
  while (!userChoice) {
    const input = await askFn("Enter your choice (rock/paper/scissors): ");
    userChoice = getUserChoiceFn(input);
  }

  const computerChoice = getComputerChoiceFn();
  const result = determineWinnerFn(userChoice, computerChoice);

  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);
  console.log(result);
};

if (require.main === module) {
  playGame();
}

module.exports = {
  getUserChoice,
  getComputerChoice,
  determineWinner,
  askQuestion,
  playGame,
};
