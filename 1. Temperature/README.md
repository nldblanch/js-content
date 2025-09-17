# 🌡️ Challenge 1: Temperature Converter

## Objective

Create a temperature converter that can convert between Celsius and Fahrenheit using Test-Driven Development (TDD).

## Learning Goals

- Practice TDD methodology
- Understand temperature conversion formulas
- Work with JavaScript functions and mathematical operations
- Learn to write clean, testable code

## Requirements

- Create a function `celsiusToFahrenheit` that takes a Celsius temperature and returns the Fahrenheit equivalent
- Create a function `fahrenheitToCelsius` that takes a Fahrenheit temperature and returns the Celsius equivalent
- Use the formulas:
  - Celsius to Fahrenheit: `(celsius * 9/5) + 32`
  - Fahrenheit to Celsius: `(fahrenheit - 32) * 5/9`

## Getting Started

### Option 1: Follow the Step-by-Step Instructions

1. Read `instructions.md` for detailed, beginner-friendly instructions
2. Build your solution step by step
3. Test with `npm test` when ready

### Option 2: Practice Test-Driven Development

1. Read `TDD_GUIDE.md` to understand TDD methodology
2. Start with the first test by removing `.skip`
3. Write minimal code to make it pass
4. Gradually add more tests and functionality

## Example Usage

```javascript
celsiusToFahrenheit(0); // Returns 32
celsiusToFahrenheit(100); // Returns 212
fahrenheitToCelsius(32); // Returns 0
fahrenheitToCelsius(212); // Returns 100
```

## Files in This Challenge

- `instructions.md` - Step-by-step tutorial approach
- `TDD_GUIDE.md` - Test-driven development guide
- `temperature.js` - Your solution file
- `temperature.test.js` - Test suite with incremental challenges

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (reruns on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Hints

- Start with the basic conversions (0°C, 100°C)
- Remember that -40°C = -40°F (same temperature!)
- Use `toBeCloseTo()` for floating-point comparisons
- Consider edge cases like very high/low temperatures

## Success Criteria

- All tests pass
- Functions handle positive and negative temperatures
- Round-trip conversions maintain precision
- Code is clean and well-commented
