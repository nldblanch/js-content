# 🏃 Challenge 4: Race Day

## Objective

Create a race registration system that assigns race numbers and start times based on runner's age and registration time.

## Learning Goals

- Begin to use JavaScript objects
- Practice handling multiple conditions

# Function Documentation

## What's Included

1. [registerRunner](#registerrunner)

## registerRunner

The `registerRunner` method determines race number and start time based on runner's age and registration status.

### Syntax

```javascript
registerRunner(age, registeredEarly);
```

#### Parameters

`age`

A number representing the runner's age.

`registeredEarly`

A boolean indicating whether the runner registered early (true) or late (false).

#### Return value

Returns an object containing:

- `raceNumber`: Number between 0-1999
- `startTime`: String indicating race start time (or empty string for age 18)
- `message`: String with registration information

Race numbers and times are assigned as follows:

- Early adults (over 18): Number 1000-1999 and race at 9:30 am
- Late adults (over 18): Number 0-999 and race at 11:00 am
- Youth (under 18): Number 0-999 and race at 12:30 pm
- Age 18: Referred to registration desk

## Example Usage

```javascript
registerRunner(25, true);
/* Returns:
{
    raceNumber: 1234,
    startTime: '9:30 am',
    message: 'Your race number is 1234. You will race at 9:30 am.'
}
*/

registerRunner(16, false);
/* Returns:
{
    raceNumber: 234,
    startTime: '12:30 pm',
    message: 'Your race number is 234. You will race at 12:30 pm.'
}
*/

registerRunner(18, true);
/* Returns:
{
    raceNumber: 345,
    startTime: '',
    message: 'Please see the registration desk.'
}
*/
```