# Step-by-Step Instructions

## Function 1: Convert to Fahrenheit

Use the formula to calculate Fahrenheit and store it in a variable named `fahrenheit`. You can do this in two steps:

```javascript
let fahrenheit = celsius * (9 / 5);
fahrenheit = fahrenheit + 32;
```

Or even better, in one step:

```javascript
const fahrenheit = celsius * (9 / 5) + 32;
```

Then return your value:

```javascript
return fahrenheit;
```

### Solution

```javascript
function celsiusToFahrenheit(celsius) {
    const fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}
```

## Function 2: Convert to Celsius

Use the formula to calculate Celsius and store it in a variable named `celsius`. Remember to subtract 32 from the temperature before it is multiplied:

```javascript
const celsius = (fahrenheit - 32) * (5 / 9);
```

Then return your value:

```javascript
return celsius;
```

### Solution

```javascript
function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
}
```

## Function 3: Display temperature

This function is an opportunity to reuse your previous functions you wrote to convert the numbers. However, you will need to decide which one to use depending on the option. 


Let's start by checking the received option:

```javascript
if (option === 'celsius') {
    console.log('the option is celsius');
} else {
    console.log('the option is fahrenheit');
}
```

We can make this more robust by checking for fahrenheit too:

```javascript
if (option === 'celsius') {
    console.log('the option is celsius');
} else if (option === 'fahrenheit') {
    console.log('the option is fahrenheit');
} else {
    // Handle invalid options
}
```

If the option is _celsius_, we want to calculate the temperature in fahrenheit. Remember to pass the temperature parameter that `displayTemperature` received:

```javascript
const fahrenheit = celsiusToFahrenheit(temperature);
```

If the option was _fahrenheit_, we want to convert to celsius:

```javascript
const celsius = fahrenheitToCelsius(temperature);
```

Now we need to return a string depending on the option. Let's start with celsius:

```javascript
return 'The temperature is ' + temperature + ' degrees celsius, ' + fahrenheit + ' degrees fahrenheit.';
```

Use `Math.floor()` to round down the temperatures to get a whole number.

```javascript
return 'The temperature is ' + Math.floor(temperature) + ' degrees celsius, ' + Math.floor(fahrenheit) + ' degrees fahrenheit.';
```

It's starting to get a bit messy. Try using string template literals - a way of formatting strings using backticks (\` \`) in JavaScript:

```javascript
return `The temperature is ${Math.floor(temperature)} degrees celsius, ${Math.floor(fahrenheit)} degrees fahrenheit.`;
```

And for receiving fahrenheit, we should return another string:
```javascript
return `The temperature is ${Math.floor(celsius)} degrees celsius, ${Math.floor(temperature)} degrees fahrenheit.`;
```

If we receive anything else as our option, we should return a string informing the user:

```javascript
return 'Invalid temperature option provided.'
```

### Solution

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
        return 'Invalid temperature option provided.'
    }
}
```

</details>
<br>

## Key Concepts to Remember

1. **Constants vs Variables**: Use `const` for values that don't change, `let` for values that do. You should be using constants 95% of the time.
2. **Mathematical Operations**: JavaScript follows standard order of operations (_BODMAS_).
3. **Math Object**: Use `Math.floor()` to round down numbers, `Math.ceil()` to round up.
4. **String Interpolation**: Use backticks and `${}` for dynamic strings.
5. **Comments**: Use `//` for single-line comments if you need to explain your code. Try to write code that explains itself so that you don't need comments in the first place.
