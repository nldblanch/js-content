# Step-by-Step Instructions

This challenge teaches string iteration, conditional logic, and array manipulation while building a fun text converter. You'll create a function that translates human text into "whale talk" by following specific vowel rules.

## Understanding the Problem

Whales only understand vowels, and they have special pronunciation rules:
- They only "hear" vowels: a, e, i, o, u
- They don't recognize 'y' as a vowel
- They emphasize 'e' and 'u' sounds by doubling them
- Everything is UPPERCASE because whales are loud!

**Example:**
```
Input:  "turpentine and turtles"
Output: "UUEEIEEAUUUEE"
```

Let's break down how this works:
- `t` → ignored (consonant)
- `u` → `uu` (vowel, doubled)
- `r` → ignored (consonant)
- `p` → ignored (consonant)
- `e` → `ee` (vowel, doubled)
- `n` → ignored (consonant)
- and so on...

---

## Step 1: Create the Function and Handle Invalid Input

First, let's set up our function to make sure it can handle unexpected inputs.

### Implementation

You already have a function called `convertToWhaleTalk` that takes one parameter: `text`.

Before we process the text, we need to check if it's actually a string. If someone passes in `null`, `undefined`, a number, or any other non-string value, we should return an empty string.

<details>
<summary>Hint</summary>

Use the `typeof` operator to check the data type:
```javascript
if (typeof text !== 'string') {
    return '';
}
```
</details>

**Concept Check:** Why do we need this validation?
- Prevents crashes when someone calls `convertToWhaleTalk(null)`
- Makes our function more robust and predictable
- This is called "defensive programming"

---

## Step 2: Set Up Your Data Structures

Now let's create the tools we'll need to process the text.

### Implementation

We need two things:
1. An array of vowels to check against
2. An empty array to store our results

Create a constant called `vowels` that contains all the vowels we care about: `'a', 'e', 'i', 'o', 'u'`.

Then create an empty array called `result` where we'll collect the whale talk characters.

<details>
<summary>Hint</summary>

```javascript
const vowels = ['a', 'e', 'i', 'o', 'u'];
const result = [];
```
</details>

**Why use an array for vowels?**
- Easy to check if a character is a vowel using `.includes()`
- More maintainable than multiple `||` conditions
- Clear and readable

**Why collect results in an array?**
- Arrays are mutable (we can keep adding to them)
- We can easily join them into a string at the end
- More efficient than string concatenation in a loop

---

## Step 3: Loop Through Each Character

We need to examine every character in the input text.

### Implementation

Use a `for` loop to iterate through each character in the text. The loop should:
- Start at index 0
- Continue while the index is less than the text length
- Increment by 1 each time

Inside the loop, store the current character in a variable called `char`.

<details>
<summary>Hint</summary>

```javascript
for (let i = 0; i < text.length; i++) {
    const char = text[i];
}
```
</details>

**Loop Breakdown:**
- `let i = 0` → Start at the first character
- `i < text.length` → Keep going until we've seen all characters
- `i++` → Move to the next character each time
- `text[i]` → Access the character at position `i`

---

## Step 4: Convert to Lowercase for Comparison

We need to handle both uppercase and lowercase letters consistently.

### Implementation

Right after storing the character, convert it to lowercase and store it in `char`. This way, 'A' and 'a' will both be treated as 'a'.

<details>
<summary>Hint</summary>

Use the `.toLowerCase()` method on the character:
```javascript
const char = text[i].toLowerCase();
```
</details>

**Why convert to lowercase?**
- Our vowels array only contains lowercase letters
- Makes comparison easier (we don't need to check for both 'A' and 'a')
- We'll convert everything to uppercase at the end anyway

_Note: You could do this to uppercase instead, but I prefer comparisons with lowercase letters._

---

## Step 5: Check if the Character is a Vowel

Now we need to determine if the current character is one of our vowels.

### Implementation

Use an `if` statement to check if the `vowels` array includes the current character. The `.includes()` method returns `true` if the item is in the array, `false` otherwise.

For now, just add a comment inside the if block saying `// It's a vowel!`

<details>
<summary>Hint</summary>

```javascript
if (vowels.includes(char)) {
    // It's a vowel!
}
```
</details>

**Understanding `.includes()`:**
```javascript
['a', 'e', 'i'].includes('a')  // true
['a', 'e', 'i'].includes('b')  // false
['a', 'e', 'i'].includes('A')  // false (case-sensitive!)
```

This is why we converted to lowercase first!

---

## Step 6: Add the Vowel to Results

When we find a vowel, we need to add it to our results array.

### Implementation

Inside the `if` block, use `.push()` to add the character to the `result` array.

<details>
<summary>Hint</summary>

```javascript
if (vowels.includes(char)) {
    result.push(char);
}
```
</details>

**What's happening:**
- When we find 'a' in "whale", we add 'a' to result → `['a']`
- When we find 'e' in "whale", we add 'e' to result → `['a', 'e']`
- Consonants are ignored (they never enter the if block)

---

## Step 7: Double the 'e' and 'u' Vowels

Whales emphasize 'e' and 'u' sounds, so we need to add them twice.

### Implementation

After adding the vowel to the result, check if the character is 'e' or 'u'. If it is, push it to the result array again.

You can do this with another `if` statement that checks: is `char` equal to 'e' OR is `char` equal to 'u'?

<details>
<summary>Hint</summary>

```javascript
if (char === 'e' || char === 'u') {
    result.push(char);
}
```
</details>

**Example Flow:**
```
Input: "eu"
- Find 'e' → push 'e' → ['e']
- 'e' needs doubling → push 'e' again → ['e', 'e']
- Find 'u' → push 'u' → ['e', 'e', 'u']
- 'u' needs doubling → push 'u' again → ['e', 'e', 'u', 'u']
```

**The `||` operator:**
- `||` means "OR"
- Returns `true` if either condition is `true`
- `char === 'e' || char === 'u'` is `true` when char is 'e' or 'u'

---

## Step 8: Convert to Uppercase and Return

Finally, we need to combine our array into a string and make it uppercase.

### Implementation

After the loop completes, we need to:
1. Join the result array into a single string (use `.join('')` with an empty string separator)
2. Convert it to uppercase (use `.toUpperCase()`)
3. Return the final string

<details>
<summary>Hint</summary>

```javascript
return result.join('').toUpperCase();
```
</details>

**Understanding `.join()` and `.toUpperCase()`:**

```javascript
['a', 'e', 'i'].join('')        // "aei"
['a', 'e', 'i'].join('-')       // "a-e-i"
['a', 'e', 'i'].join(' ')       // "a e i"

"hello".toUpperCase()           // "HELLO"
"aEiOu".toUpperCase()           // "AEIOU"
```

We chain them together: `result.join('').toUpperCase()`
1. First, join the array into a string: `['e', 'e', 'u', 'u']` → `"eeuu"`
2. Then convert to uppercase: `"eeuu"` → `"EEUU"`

---

## Complete Solution

<details>
<summary>Reveal</summary>

```javascript
function convertToWhaleTalk(text) {
    if (typeof text !== 'string') {
        return '';
    }

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = [];

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();

        if (vowels.includes(char)) {
            result.push(char);
            // Check if we need to double it
            if (char === 'e' || char === 'u') {
                result.push(char);
            }
        }
    }

    return result.join('').toUpperCase();
}
```
</details>

---

## Alternative Approaches

Want to take it further? Try these:

### Using For...Of Loop

Instead of assigning `text[i]`, try using a `for..of` loop to do this directly. 

- [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

<details>
<summary>Hint</summary>

```javascript
for (const character of text) {
    const char = character.toLowerCase();
    // rest of logic...
}
```

</details>


### Using Array Methods

Try solving this using the `.filter` and `.map` methods. You can even chain the process from start to finish.

- [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

<details>
<summary>Hint</summary>

```javascript
return text
    .toLowerCase()
    .split('')
    .filter(char => vowels.includes(char))
    .map(char => (char === 'e' || char === 'u') ? char + char : char)
    .join('')
    .toUpperCase();
```

</details>

**Discussion Question:** Which approach is more readable? Which is more efficient?

---

## Conclusion

You've successfully created a whale talk translator! You've practiced:
- Input validation
- String manipulation
- Array operations
- Conditional logic
- Loops

These are fundamental skills you'll use in every JavaScript project!

**MDN References:**
- [for loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- [String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [String.prototype.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
