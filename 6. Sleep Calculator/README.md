# 🛌 Challenge 6: Sleep Calculator

## Before You Start

You may have noticed this new style of function - the arrow function. I have [written a guide](./arrowFunctions.md) on them if you want to read, or you can do your own research. 

## Objective

Write unit tests for prewritten code to validate its functionality, uncover hidden bugs, and strengthen understanding of test-driven development principles. It would be very beneficial for you to read the instructions for this challenge even if you feel confident testing on your own. 

## Learning Goals

- Demonstrate unit testing techniques
- Practice debugging
- Understand expected behaviours

## Note

You can use `jest` in coverage mode to check how robust your tests are! It's not an exact measure of whether you've tested properly, but it can be helpful in catching lines or branches you may have missed.

```bash
npm run test:coverage
```

# Function Documentation

## What's Included

1. [getSleepHours](#getsleephours)  
1. [getActualSleepHours](#getactualsleephours)  
1. [getIdealSleepHours](#getidealsleephours)  
1. [calculateSleepDebt](#calculatesleepdebt)  

## getSleepHours

Takes a valid day of the week and returns the number of hours sleep that day.

### Syntax
```javascript
getSleepHours(day)
```

#### Parameters
`day`

A string representing the day of the week in long format e.g. `Monday` or `tuesday`.

#### Return value

A `number` representing the hours slept.

Returns an `Error` when given an invalid parameter.

### Example Usage

```javascript
getSleepHours('monday'); // Returns 8
getSleepHours('TUESDAY'); // Returns 7
getSleepHours('sun'); // Returns Error: Invalid day
```

## getActualSleepHours

Calculates the total actual hours of sleep accumulated throughout the week.

### Syntax
```javascript
getActualSleepHours()
```

#### Return value
Returns a number representing the number of hours slept.

### Behaviour

- Depends on `getSleepHours` to calculate weekly total.

### Example Usage

```javascript
getActualSleepHours(); // Returns 50
```

## getIdealSleepHours

Returns the number of ideal hours of sleep in a week.

### Syntax
```javascript
getIdealSleepHours(idealHours)
```

#### Parameters
`idealHours`

A number representing the ideal hours of sleep each night.

#### Return value

A number representing the ideal hours in a week. 

```javascript
getIdealSleepHours(8); // Returns 56
```

## calculateSleepDebt

Calculates the sleep debt accumulated in a given week and displays it in a pretty format.

### Syntax
```javascript
calculateSleepDebt();
calculateSleepDebt(idealHours);
```

#### Params
`idealHours`

A number representing the ideal hours of sleep. Has a `default` value of 8.

#### Return value

Returns a string in prety format describing whether the user had perfect, less than ideal or more than ideal hours of sleep. 

### Behaviour

- Depends on `getActualSleepHours` to calculate the actual hours of sleep.
- Depends on `getIdealSleepHours` to calculate ideal hours of sleep.

### Example Usage

```javascript
calculateSleepDebt(); // Returns 'You got 6 hour(s) less sleep than needed. Get some rest.'

calculateSleepDebt(7); // Returns 'You got 1 hour(s) more sleep than needed.'

calculateSleepDebt(50/7); // Returns 'Perfect amount of sleep.'
```