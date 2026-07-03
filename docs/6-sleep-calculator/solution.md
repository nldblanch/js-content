## Solution 1: getSleepHours

<details>
<summary>Reveal</summary>

```javascript
const getSleepHours = day => {
    switch (day.toLowerCase()) {
        case 'monday': return 8;
        case 'tuesday': return 7;
        case 'wednesday': return 6;
        case 'thursday': return 7;
        case 'friday': return 5;
        case 'saturday': return 9;
        case 'sunday': return 8;
        default: return new Error('Invalid day');
    }
};
```

</details>

## Solution 2: calculateSleepDebt

<details>
<summary>Reveal</summary>

```javascript
describe('calculateSleepDebt', () => {
    test('returns perfect sleep message when actual sleep equals ideal sleep', () => {
        const ideal = 50 / 7; // 50 hours per week
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('Perfect amount of sleep.');
    }); 
    
    test('returns less sleep message when actual sleep is less than ideal sleep', () => {
        const ideal = 100 / 7; // ideal sleep more than actual
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('You got 50 hour(s) less sleep than needed. Get some rest.');
    });

    test('returns more sleep message when actual sleep is more than ideal sleep', () => {
        const ideal = 25 / 7; // ideal sleep less than actual
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('You got 25 hour(s) more sleep than needed.');
    });

    test('uses default ideal sleep hours when no argument is provided', () => {
        const result = calculateSleepDebt();
        expect(result).toBe('You got 6 hour(s) less sleep than needed. Get some rest.');
    });

    test('handles non-integer ideal sleep hours', () => {
        const ideal = 7.5; // 7.5 hours per night
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('You got 2.5 hour(s) less sleep than needed. Get some rest.');
    });

    test('handles zero ideal sleep hours', () => {
        const ideal = 0; // 0 hours per night
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('You got 50 hour(s) more sleep than needed.');
    });

    test('handles negative ideal sleep hours', () => {
        const ideal = -5; // negative hours per night
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('You got 85 hour(s) more sleep than needed.');
        // you may want to change this behaviour by adding tests to getIdealSleepHours - expect negative inputs to default to 0 perhaps?
    });
});
```

</details>

## Solution 3: Complete Test Suite

<details>
<summary>Reveal</summary>

```javascript
describe('getSleepHours', () => {
    test('returns correct sleep hours for each day', () => {
        expect(getSleepHours('monday')).toBe(8);
        expect(getSleepHours('tuesday')).toBe(7);
        expect(getSleepHours('wednesday')).toBe(6);
        expect(getSleepHours('thursday')).toBe(7);
        expect(getSleepHours('friday')).toBe(5);
        expect(getSleepHours('saturday')).toBe(9);
        expect(getSleepHours('sunday')).toBe(8);
    });

    test('is case insensitive', () => {
        expect(getSleepHours('MONDAY')).toBe(8);
        expect(getSleepHours('tUeSdAy')).toBe(7);
    });

    test('returns error for invalid day', () => {
        expect(getSleepHours('funday')).toBeInstanceOf(Error);
    });
});

describe('getActualSleepHours', () => {
    test('returns total sleep hours for the week', () => {
        expect(getActualSleepHours()).toBe(50);
    });
});

describe('getIdealSleepHours', () => {
    test('returns correct ideal sleep hours for given ideal hours per night', () => {
        expect(getIdealSleepHours(8)).toBe(56);
        expect(getIdealSleepHours(7)).toBe(49);
        expect(getIdealSleepHours(6)).toBe(42);
    });
});

describe('calculateSleepDebt', () => {
    test('returns perfect sleep message when actual sleep equals ideal sleep', () => {
        const ideal = 50 / 7; // 50 hours per week
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('Perfect amount of sleep.');
    }); 
    
    test('returns less sleep message when actual sleep is less than ideal sleep', () => {
        const ideal = 100 / 7; // ideal sleep more than actual
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('You got 50 hour(s) less sleep than needed. Get some rest.');
    });

    test('returns more sleep message when actual sleep is more than ideal sleep', () => {
        const ideal = 25 / 7; // ideal sleep less than actual
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('You got 25 hour(s) more sleep than needed.');
    });

    test('uses default ideal sleep hours when no argument is provided', () => {
        const result = calculateSleepDebt();
        expect(result).toBe('You got 6 hour(s) less sleep than needed. Get some rest.');
    });

    test('handles non-integer ideal sleep hours', () => {
        const ideal = 7.5; // 7.5 hours per night
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('You got 2.5 hour(s) less sleep than needed. Get some rest.');
    });

    test('handles zero ideal sleep hours', () => {
        const ideal = 0; // 0 hours per night
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('You got 50 hour(s) more sleep than needed.');
    });

    test('handles negative ideal sleep hours', () => {
        const ideal = -5; // negative hours per night
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('You got 85 hour(s) more sleep than needed.');
        // you may want to change this behaviour by adding tests to getIdealSleepHours - expect negative inputs to default to 0 perhaps?
    });
});
```

</details>
