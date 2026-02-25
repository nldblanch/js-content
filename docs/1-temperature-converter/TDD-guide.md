# Test-Driven Development (TDD) Guide

## What is TDD?

Test-Driven Development is a programming approach where you write tests **before** writing the actual code. It follows this cycle:

1. **🔴 Red**: Write a failing test
2. **🟢 Green**: Write the minimum code to make the test pass
3. **🔵 Refactor**: Improve your code while keeping tests green

## How to Use This Test Suite

### Step 1: Start with the First Test

1. Remove `.skip` from the first test:

   ```javascript
   test("converts 0°C to 32°F (freezing point)", () => {
   ```

2. Run the test: `npm test`

   - It should **FAIL** (Red phase)

3. Write the minimum code to make it pass:

   ```javascript
   function celsiusToFahrenheit(celsius) {
     return 32; // Just enough to pass the first test
   }
   ```

4. Run the test again - it should **PASS** (Green phase)

### Step 2: Add More Tests Gradually

1. Remove `.skip` from the next test
2. Run tests - the new test will fail
3. Update your function to handle the new case:
   ```javascript
   function celsiusToFahrenheit(celsius) {
     if (celsius === 0) return 32;
     if (celsius === 100) return 212;
     // Add more conditions as needed
   }
   ```

### Step 3: Refactor to the General Solution

Once you have several tests passing, refactor to use the actual formula:

```javascript
function celsiusToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}
```

## TDD Benefits

- ✅ **Confidence**: You know your code works
- ✅ **Documentation**: Tests show how your code should behave
- ✅ **Design**: Writing tests first helps you think about the interface
- ✅ **Regression Prevention**: Changes won't break existing functionality

## Pro Tips

1. **Start Small**: Make the simplest test pass first
2. **One Test at a Time**: Don't remove multiple `.skip` at once
3. **Read Error Messages**: They tell you exactly what's wrong
4. **Refactor Often**: Once tests pass, clean up your code

## Challenge Yourself

Try implementing the functions using TDD:

1. Start with `celsiusToFahrenheit`
2. Then move to `fahrenheitToCelsius`
3. Finally, test the round-trip conversions

Happy coding! 🚀
