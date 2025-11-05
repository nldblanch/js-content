# 🐕 Challenge 2: Dog Age Calculator

## Objective

Create a dog age calculator that converts human years to dog years.

## Learning Goals

- Work with JavaScript conditional statements
- Practice mathematical operations
- Implement multi-step calculations

## Getting Started

### Option 1: Follow the Step-by-Step Instructions

1. Read `instructions.md` for detailed, beginner-friendly instructions
2. Build your solution step by step
3. Test with `npm test` when ready
4. As you progress, remove `.skip` from the `describe` blocks to add more tests

### Option 2: Try on your own

1. Read the [Function Documentation](#function-documentation) 
2. Write the code to pass the tests
3. Remove `.skip` blocks from `describe` blocks. You should be passing the first `describe` block before moving to the next one.
4. Add functionality until all tests pass.

## Files in This Challenge

- `instructions.md` - Step-by-step tutorial approach
- `dogAge.js` - Your solution file
- `dogAge.test.js` - Test suite with incremental challenges

## Success Criteria

- All tests pass
- Function calculates for ages 0 and above
- Function gracefully handles invalid inputs


<br >
<br >
<br >

# Function Documentation

## What's Included

1. [calculateDogAge](#calculateDogAge)

## calculateDogAge

The `calculateDogAge` method receives a number of human years and converts them into the number of equivalent dog years. 

### Syntax

```javascript
calculateDogAge(humanYears);
```

#### Parameters

`humanYears`

A number to convert to dog years.

#### Return value
A number representing the number of dog years. When `humanYears` is not a valid input, it returns `0`.

### Example Usage

```javascript
calculateDogAge(10); // Returns 53
calculateDogAge(2); // Returns 21
calculateDogAge('five'); // Returns 0
```