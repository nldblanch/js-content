## Solution

<details>
<summary>Reveal</summary>

```javascript
function calculateDogAge(humanYears) {
	if (!humanYears || humanYears <= 0 || typeof humanYears !== 'number') return 0;

	if (humanYears <= 2) return humanYears * 10.5;
        
	const earlyYears = 2 * 10.5;
	const laterYears = (humanYears - 2) * 4;
	return earlyYears + laterYears;
}
```

</details>
