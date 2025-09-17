# 🌡️ Temperature Converter Challenge

## Overview

In this challenge, you'll learn to convert temperatures between Kelvin, Celsius, and Fahrenheit scales. You'll practice using variables, mathematical operations, and JavaScript's built-in Math object.

## Learning Objectives

- Understand temperature scale relationships
- Practice variable declaration and assignment
- Use mathematical operations in JavaScript
- Work with the Math object
- Learn string interpolation with template literals

## Temperature Scale Relationships

- **Kelvin to Celsius**: `Celsius = Kelvin - 273`
- **Celsius to Fahrenheit**: `Fahrenheit = Celsius × (9/5) + 32`
- **Newton Scale**: `Newton = Celsius × (33/100)`

## Step-by-Step Instructions

### Step 1: Set Up Your Starting Temperature

Create a constant variable named `kelvin` and set it to 293.

```javascript
// Today's forecast: 293 Kelvin
const kelvin = 293;
```

**�� Hint**: Use `const` since this value won't change during our program.

### Step 2: Convert to Celsius

Convert Kelvin to Celsius by subtracting 273 and store the result in a variable named `celsius`.

```javascript
// Convert Kelvin to Celsius
const celsius = kelvin - 273;
```

### Step 3: Convert to Fahrenheit

Use the formula to calculate Fahrenheit and store it in a variable named `fahrenheit`.

```javascript
// Convert Celsius to Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
```

**💡 Hint**: Use `let` since we'll modify this value in the next step.

### Step 4: Round the Fahrenheit Temperature

Use `Math.floor()` to round down the Fahrenheit temperature to get a whole number.

```javascript
// Round down to get a whole number
fahrenheit = Math.floor(fahrenheit);
```

### Step 5: Display the Result

Use `console.log()` with string interpolation to display the temperature.

```javascript
// Display the temperature
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
```

### Step 6: Test Your Program

Run your program! You should see: "The temperature is 68 degrees Fahrenheit."

### Step 7: Try Different Temperatures

Change the `kelvin` value to test different temperatures:

- Try `kelvin = 0` (absolute zero)
- Try `kelvin = 273` (freezing point of water)
- Try `kelvin = 373` (boiling point of water)

## 🚀 Stretch Challenge: Newton Scale

For extra practice, add Newton scale conversion:

```javascript
// Convert to Newton scale
let newton = celsius * (33 / 100);
// Round down
newton = Math.floor(newton);
// Display Newton temperature
console.log(`The temperature is ${newton} degrees Newton.`);
```

## Expected Results

- **293 K** = 20°C = 68°F = 6°N
- **0 K** = -273°C = -460°F = -90°N
- **273 K** = 0°C = 32°F = 0°N
- **373 K** = 100°C = 212°F = 33°N

## 🎯 Key Concepts to Remember

1. **Constants vs Variables**: Use `const` for values that don't change, `let` for values that do
2. **Mathematical Operations**: JavaScript follows standard order of operations
3. **Math Object**: Use `Math.floor()` to round down numbers
4. **String Interpolation**: Use backticks and `${}` for dynamic strings
5. **Comments**: Use `//` for single-line comments to explain your code

## Next Steps

Once you've completed this challenge, try the test-driven development approach by running the tests and implementing the functions step by step!
