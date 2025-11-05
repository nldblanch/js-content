# Step-by-Step Instructions

This function is slightly more complex and we will need to consider some edge cases. We will start with basic functionality and gradually address the different scenarios. You will find it beneficial to run `jest` in `watch mode`, so run the watch script to see it run the tests everytime you save.

## 1. Basic Functionality

Remove the first `.skip` from the `describe` block. 

Now let's address the first two years of a dog’s life count:

```javascript
    const earlyYears = 2 * 10.5;
```

Each following year should represent 4 years. We need to account for the 2 years we already calculated:

```javascript
    const laterYears = (humanYears - 2) * 4;
```

Finally, we need to return the total value:

```javascript
    return earlyYears + laterYears;
```

## 2. Advanced Cases

Remove the second `.skip`. If you save, you'll notice that the tests start failing. Consider the first case:

- `humanYears` is 1, so we expect the return to be `10.5`
- The function calculates `2 * 10.5` for `earlyYears`
- It then calculates `humanYears - 2` (-1) multiplied by 4
- Finally, it returns `21 - 4` which is why the received value is `17`

We can easily address this with an `early return`. This is where we return from a function so that later functionality is not executed. Since every human year up until 2 is worth 10.5, we can ignore the later years when the human age does not exceed 2.

```javascript
    if (humanYears <= 2) return humanYears * 10.5;
```

_**Note** I'm using a shorthand in the `if statement` to avoid opening curly braces and writing on a new line. There are many shorthands you can learn that are very useful._

## 3. Edge Cases

Remove the third `.skip`. At this point, the first two tests should in fact pass, however, we're not dealing with negative numbers. When the received parameter is less than zero, we should be returning 0.

```javascript
    if (humanYears <= 0) return 0;
```

## 4. Input Validation
Remove the final `.skip`. What we're trying to ensure is that this function always returns a number. If the user provides `undefined`, `null`, or in fact, anything that is not a number, we want to return 0:

```javascript
    if (humanYears <= 0) return 0;
    if (typeof humanYears !== 'number') return 0;
```

We still get one failing test! Let's try to debug what's happening.

```javascript
    console.log(humanYears <= 0);
    console.log(typeof humanYears !== 'number');
```

Now we can't tell which test corresponds to our console log. The test that is failing is the very last one. Try adding `.only` to only run the last test.

```javascript
    test.only('returns 0 for an NaN input', () => {
        expect(calculateDogAge(NaN)).toBe(0);
    });
```

Now our `console logs` should show:

```bash
    console.log
        false

        at log (2. Dog Age Calculator/dogAge.js:3:13)

    console.log
        false

        at log (2. Dog Age Calculator/dogAge.js:4:13)
```

The input is `NaN`, which is not less than or equal to 0, but it _is a number._ It's just a number that doesn't exist. It's a `falsey` value in JavaScript, just like `null`, `undefined`, `0`, `''`, and a few others. So if you console log this:

```javascript
    console.log(!humanYears);
```

You should expect to see

```bash
    console.log
        true

        at log (2. Dog Age Calculator/dogAge.js:3:13)
```

Therefore, we can check to see if the value is falsey, since all numbers are truthy value:

```javascript
    if (!humanYears) return 0;
```

We can actually combine these if statements into one single catchall:

```javascript
    if (!humanYears || humanYears <= 0 || typeof humanYears !== 'number') return 0;
```

Remeber to remove the `.only` to run the rest of the tests, and you should see them all pass!

### Solution

```javascript
    function calculateDogAge(humanYears) {
        if (!humanYears || humanYears <= 0 || typeof humanYears !== 'number') return 0;

        if (humanYears <= 2) return humanYears * 10.5;
        
        const earlyYears = 2 * 10.5;
        const laterYears = (humanYears - 2) * 4;
        return earlyYears + laterYears;
    }
```