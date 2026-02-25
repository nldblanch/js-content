# Function Documentation

## What's Included

1. [calculateDogAge](#calculatedogage)

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