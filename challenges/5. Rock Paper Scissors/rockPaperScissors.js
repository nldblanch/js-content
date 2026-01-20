const readline = require('readline')

const getUserChoice = userInput => {
    // Your code here
};

const getComputerChoice = () => {
    // Your code here
};

const determineWinner = (userChoice, computerChoice) => {
    // Your code here
};

const askQuestion = (question) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
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
    determineWinnerFn = determineWinner
} = {}) => {
    let userChoice;
    while (!userChoice) {
        const input = await askFn('Enter your choice (rock/paper/scissors): ');
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
    playGame
};
