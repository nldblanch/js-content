function magicEightBall() {
  // Your code here

  const errorMessage = "Error: Invalid response";

  const validResponses = [
    "It is certain",
    "It is decidedly so",
    "Reply hazy try again",
    "Cannot predict now",
    "Do not count on it",
    "My sources say no",
    "Outlook not so good",
    "Signs point to yes",
  ];

  // Generate a random number for extraction from 'validResponses' array
  const randomNumberValidResonses = Math.floor(
    Math.random() * validResponses.length
  );

  switch (randomNumberValidResonses) {
    case 0:
      eightBall = "It is certain";
      break;
    case 1:
      eightBall = "It is decidedly so";
      break;
    case 2:
      eightBall = "Reply hazy try again";
      break;
    case 3:
      eightBall = "Cannot predict now";
      break;
    case 4:
      eightBall = "Do not count on it";
      break;
    case 5:
      eightBall = "My sources say no";
      break;
    case 6:
      eightBall = "Outlook not so good";
      break;
    case 7:
      eightBall = "Signs point to yes";
      break;
    default:
      eightBall = "Error: Invalid response";
  }

  return eightBall;
}

function logMagicEightBall(userQuestion, userName) {
  // Your code here

  const greeting = userName ? "Hello, " + userName + "!" : "Hello!";
  console.log(greeting);

  console.log("User's question: " + userQuestion);

  const eightBallOutput = magicEightBall();

  console.log(eightBallOutput);
}

module.exports = { magicEightBall, logMagicEightBall };
