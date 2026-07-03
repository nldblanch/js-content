## Solution

<details>
<summary>Reveal</summary>

```javascript
function registerRunner(age, registeredEarly) {
    let raceNumber = Math.round(Math.random() * 1000);
    let startTime = '';
    let message = '';

    if (age > 18 && registeredEarly) {
        raceNumber += 1000;
        startTime = '9:30 am';
        message = (`Your race number is ${raceNumber}. You will race at 9:30 am.`);
    } else if (age > 18 && !registeredEarly) {
        message = (`Your race number is ${raceNumber}. You will race at 11:00 am.`);
        startTime = '11:00 am';
    } else if (age < 18) {
        startTime = '12:30 pm';
        message = (`Your race number is ${raceNumber}. You will race at 12:30 pm.`);
    } else {
        message = ('Please see the registration desk.');
    }

    return { raceNumber, startTime, message };
}
```

</details>
