## Solution 1: Convert to Fahrenheit

<details>
<summary>Reveal</summary>

```javascript
function celsiusToFahrenheit(celsius) {
	const fahrenheit = celsius * (9 / 5) + 32;
	return fahrenheit;
}
```

</details>

## Solution 2: Convert to Celsius

<details>
<summary>Reveal</summary>

```javascript
function fahrenheitToCelsius(fahrenheit) {
	const celsius = (fahrenheit - 32) * (5 / 9);
	return celsius;
}
```

</details>

## Solution 3: Display Temperature

<details>
<summary>Reveal</summary>

```javascript
function displayTemperature(temperature, option) {
	if (option === 'celsius') {
		const fahrenheit = celsiusToFahrenheit(temperature);
		return `The temperature is ${Math.floor(temperature)} degrees celsius, ${Math.floor(fahrenheit)} degrees fahrenheit.`;
	} else if (option === 'fahrenheit') {
		const celsius = fahrenheitToCelsius(temperature);
		return `The temperature is ${Math.floor(celsius)} degrees celsius, ${Math.floor(temperature)} degrees fahrenheit.`;
	} else {
		return 'Invalid temperature option provided.';
	}
}
```

</details>
