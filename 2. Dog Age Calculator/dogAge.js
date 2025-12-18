function calculateDogAge(humanYears) {
  // Your code here

  if (isNaN(humanYears)) {
    return 0;
  }

  if (humanYears <= 0) {
    return 0;
  }

  const originalHumanYears = humanYears;

  // In case decimal value. First store it
  let decimalValue = undefined;
  if (humanYears % Math.floor(humanYears) !== 0) {
    decimalValue = humanYears % Math.floor(humanYears);
    humanYears = Math.floor(humanYears);
  }

  let dogAge = 0;

  let incrementValue = originalHumanYears > 2 ? 4 : 10.5;

  // First 2 years equivalent to 10.5
  for (let i = humanYears; i > 0 && i > humanYears - 2; i--) {
    dogAge += 10.5;
  }

  // Years after first 2 years equivalent to 4 years
  for (let i = humanYears - 2; i > 0; i--) {
    dogAge += 4;
  }

  if (decimalValue !== undefined) {
    dogAge += decimalValue * incrementValue;
  }

  return dogAge;
}

module.exports = {
  calculateDogAge,
};
