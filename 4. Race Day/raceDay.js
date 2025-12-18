function registerRunner(age, registeredEarly) {
  // Generate random number between 0 and 999
  let _randomNumber = Math.floor(Math.random() * 1000);
  let _startTime = "";
  // Message is AGE is exactly 18
  let _message = "Please see the registration desk.";

  if (registeredEarly && age > 18) {
    _randomNumber += 1000;
    _startTime = "9:30 am";
    // Still an ADULT. Just registered LATE.
  } else if (age > 18) {
    _startTime = "11:00 am";
    // Must be UNDER 18, a CHILD
  } else if (age < 18) {
    _startTime = "12:30 pm";
  }

  const raceNumber = _randomNumber;
  const startTime = _startTime;

  if (_startTime) {
    _message = `Your race number is ${raceNumber}. You will race at ${startTime}.`;
  }

  const message = _message;

  return { raceNumber, startTime, message };
}

module.exports = {
  registerRunner,
};
