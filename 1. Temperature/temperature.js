function celsiusToFahrenheit(celsius) {
  // Your code here
  return celsius * (9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  // Your code here
  return ((fahrenheit - 32) * 5) / 9;
}

function displayTemperature(temperature, option) {
  // Your code here

  if (option === "celsius") {
    return `The temperature is ${temperature} degrees celsius, ${celsiusToFahrenheit(
      temperature
    )} degrees fahrenheit.`;
  }

  if (option === "fahrenheit") {
    return `The temperature is ${fahrenheitToCelsius(
      temperature
    )} degrees celsius, ${temperature} degrees fahrenheit.`;
  }

  return "Invalid temperature option provided.";
}

module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  displayTemperature,
};
