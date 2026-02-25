# Step-by-Step Instructions

This challenge introduces Object-Oriented Programming (OOP) while mastering JavaScript array methods. You'll build a `MessageDecoder` class that transforms an encoded message to reveal a secret about programming.

The good news: the `revealSecretMessage()` method is already written for you! Your job is to implement the individual methods it depends on. Once all methods work correctly, the secret message will be revealed.

## Introduction to Classes

Before we dive into coding, let's understand what makes classes special in JavaScript.

A **class** is a blueprint for creating objects. It bundles related data and behavior together. Think of it like a template - you can create many instances from the same class, each with their own data.

### Basic Class Syntax

```javascript
class MessageDecoder {
    constructor(message) {
        this.message = message; // Instance property - unique to each decoder
    }
    
    someMethod() {
        // Access instance data with this.message
        return this.message;
    }
}

// Create an instance (a specific decoder with its own message)
const decoder = new MessageDecoder(['Hello', 'World']);
const anotherDecoder = new MessageDecoder(['Goodbye']); // Different message, same class
```

### Key Concepts

- **`constructor`**: Special method called automatically when you use `new`
- **`this`**: Refers to the current instance (the specific decoder you're working with)
- **Instance methods**: Functions that belong to the class and work with `this`
- **Method chaining**: When methods return `this`, you can call multiple methods in a row

### Why Use Classes?

- **Organization**: Related functionality lives together
- **Reusability**: Create many decoders from one blueprint
- **Encapsulation**: Keep internal state (`this.message`) protected inside the class
- **Chaining**: Fluent APIs that read like sentences

**MDN Reference:** [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

---

## Step 1: Implementing `removeLastElement()`

This method should remove the last element and return `this` for chaining.

### Implementation

Start by accessing the `message` property on the object instance. It is an `array` which means it has its own methods you can use to achieve the desired result. The `pop` method is suitable for removing the last element of an array. 

Remember to return `this`.

<details>
<summary>Solution</summary>

```javascript
removeLastElement() {
    this.message.pop();
    return this;
}
```

</details>

**MDN Reference:** [Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

---

## Step 2: Implementing `addToEnd()`

This method should add elements to the end and support multiple arguments.

### Implementation

To handle multiple parameters in JavaScript, we can use `rest parameters`. These collect all the arguments passed to a function, which we can then use. 

Firstly, add `...args` as your function parameter. Then, `console log` it to see what's happening. 

<details>
<summary>Hint</summary>

```javascript
addToEnd(...args) {
    console.log(args);
}
```
</details>

The function is being called like so: 

```javascript
addToEnd('four', 'five', 'six');
```

The `rest parameters` collect them into an array with one reference (the name of the parameter, in this case `args`). Now we can call an array method on our message:
- use the `push` method on the message
- use the `spread operator` to pass all arguments to it 
- return this

<details>
<summary>Solution</summary>

```javascript
addToEnd(...args) {
    this.message.push(...args);
    return this;
}
```

</details>

**MDN References:** 
- [Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

---

## Step 3: Implementing `replaceByIndex()`

This method finds an element and replaces it.

### Implementation

This method is slightly more complicated. This is the flow we need to follow:

1. Use `.indexOf()` to find the element's position
2. Check if the index is not -1 (element was found)
3. Replace the element at that index
4. Return `this`

Let's start by finding the index in our message using the `indexOf` method and assigning it to a well-named variable. Our function will need to take its first parameter, the old element to be replaced.

<details>
<summary>Hint</summary>

```javascript
replaceByIndex(oldElement) {
    const index = this.message.indexOf(oldElement);
}
```

</details>

Next, let's check if the element was found in the array. Check the `MDN reference` to see what indiciator the method gives when an element is not found. 

<details>
<summary>Hint</summary>

```javascript
if (index !== -1) {
    // code here
}

```
</details>

Thirdly we need to replace the old element with the new element. We'll need to take a second parameter (the new element) and use the index we stored to access the message property and reassign it.

<details>
<summary>Hint</summary>

```javascript
replaceByIndex(oldElement, newElement) {
    // previous code...
    if (index !== -1) {
        this.message[index] = newElement;
    }
}
```

</details>

Finally we want to return `this`, and that wraps up this method!

<details>
<summary>Solution</summary>

```javascript
replaceByIndex(oldElement, newElement) {
    const index = this.message.indexOf(oldElement);
    if (index !== -1) {
        this.message[index] = newElement;
    }
    return this;
}
```

</details>

**MDN Reference:** [Array.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

---

## Step 4: Implementing `removeFirstElement()`

This method removes the first element, similar to `removeLastElement()` but using `.shift()`.

### Implementation

You should be all set for this method! If you get stuck, refer to `Step 1.`

<details>
<summary>Solution</summary>

```javascript
removeFirstElement() {
    this.message.shift();
    return this;
}
```

</details>

**MDN Reference:** [Array.prototype.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

---

## Step 5: Implementing `addToBeginning()`

This method adds elements to the start, similar to `addToEnd()` but using `.unshift()`.

### Implementation

As before, refer to `Step 2` if you get stuck.

<details>
<summary>Solution</summary>

```javascript
addToBeginning(...args) {
    this.message.unshift(...args);
    return this;
}
```

</details>

**MDN Reference:** [Array.prototype.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

---

## Step 6: Implementing `replaceMultipleWithSingle()`

This is the most complex method - it removes multiple elements and replaces them with one.

### Understanding the Problem

Given: `['I', 'love', 'to', 'code', 'and', 'program']`  
We want to replace indices 3, 4, 5 (`'code', 'and', 'program'`) with `'swim'`  
Result: `['I', 'love', 'to', 'swim']`

### Understanding `.splice()`

The splice method takes a starting index, a number of elements to delete from that index, and an item to insert afterwards. I'd recommend exploring it in the `console` or on the `MDN` page.

```javascript
array.splice(startIndex, deleteCount, itemToAdd);
```

### Implementation

Our function will also take three parameters - the first index, the second index, and the new element.

Let's say we're deleting indices 3, 4 and 5. That's three elements to delete. Our first parameter will be `3` (starting index) and our second parameter will be `5` (finishing index). We can subtract the two indices and add `1` to get the number of elements to delete.  


<details>
<summary>Hint</summary>

```javascript
replaceMultipleWithSingle(firstIndex, lastIndex) {
    const deleteCount = lastIndex - firstIndex + 1;
}
```

</details>

Now we can call the `splice` method using our index, delete count and by taking the third parameter of our new element.

<details>
<summary>Hint</summary>

```javascript
replaceMultipleWithSingle(firstIndex, lastIndex, newElement) {
    // previous code...
    this.message.splice(firstIndex, deleteCount, newElement);
}
```

</details>

And to finish off the method, you know what to do!

<details>
<summary>Solution</summary>

```javascript
replaceMultipleWithSingle(firstIndex, lastIndex, newElement) {
    const deleteCount = lastIndex - firstIndex + 1;
    this.message.splice(firstIndex, deleteCount, newElement);
    return this;
}
```

</details>

**MDN Reference:** [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

---

## Step 7: Implementing `joinArrayToString()`

This method combines the array into a single string. Unlike other methods, it returns a string, not `this`.

### Implementation

Each method until now has been directly mutating the array attached to the object instance. The `join` method creates a `string` by connecting every element of an array whatever `string` argument you give it. For example:

```javascript
const array = [1, 2, 3, 4, 5];
console.log(array.join('-')); // logs 1-2-3-4-5
```

If we want to turn an array of strings into a sentence, we need to connect them with a `whitespace`. We want to return the output of the `join` array method.

<details>
<summary>Solution</summary>

```javascript
joinArrayToString() {
    return this.message.join(' ');
}
```

</details>

**MDN Reference:** [Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

---

## Conclusion

You should see that the `revealSecretMethod` method is already implemented using your functions - and hopefully working! There are also a few other tests in there, for example the method chaining test:

```javascript
describe('method chaining', () => {
    test('should allow chaining multiple methods', () => {
        const result = decoder
            .removeLastElement()
            .addToEnd('four')
            .removeFirstElement()
            .joinArrayToString();
        
        expect(result).toBe('two four');
    });
});
```

This test verifies that:
1. Each method returns `this` (except `joinArrayToString`)
2. Methods can be called consecutively
3. The final result is correct

---

## Helper Methods

I've also written two `getters`, methods which return helpful properties.

### `getMessage()`

Returns a copy of the current message.

```javascript
getMessage() {
    return [...this.message];
}
```

### `getLength()`

Returns the current length of the message array.

```javascript
getLength() {
    return this.message.length;
}
```

These methods are crucial for testing since they provide safe access to the internal state.

---

## Further Practice

Try these extensions to deepen your understanding:

1. **Add error handling**: What should happen if someone tries to replace an element that doesn't exist?
2. **Create a reverse method**: Can you encode a message back into the original format?
3. **Add a `reset()` method**: Restore the message to its original state
4. **Implement `toString()`**: Automatically call `joinArrayToString()` when the decoder is converted to a string
5. **Create a static method**: `MessageDecoder.decode(message)` that creates an instance and reveals the message in one call

---

## Expected Output

When all methods are correctly implemented, try running the custom script:

```bash
npm run secretMessage
```

Should output:

```
Programming is not about what you know, it is about what you can figure out. -2015, Chris Pine, Learn to Program
```

Congratulations! You've mastered OOP principles and array manipulation in JavaScript!
