# 🔐 Challenge 7: Coded Message

## Before You Start

This challenge introduces **Object-Oriented Programming (OOP)** in JavaScript. You'll learn about classes, methods, and the `this` keyword while working with array methods. If you're new to OOP, the instructions file provides detailed explanations of each concept.

## Objective

Build a `MessageDecoder` class that transforms an encoded array of strings using various array methods to reveal a hidden message about programming. Master OOP principles while practicing array manipulation techniques.

## Learning Goals

- Understand JavaScript classes and constructors
- Practice array methods (`.pop()`, `.push()`, `.shift()`, `.unshift()`, `.splice()`, `.join()`)
- Learn method chaining with `this`
- Work with instance methods and encapsulation
- Understand the difference between mutating and non-mutating methods

## Note

The `revealSecretMessage()` method has already been written for you. Your task is to implement the individual methods it depends on. Once all methods are correctly implemented, the secret message will be revealed!

You can check your progress at any time:
```bash
npm test
```

# Class Documentation

## What's Included

The `MessageDecoder` class with the following methods:

1. [constructor](#constructor)
2. [removeLastElement](#removellastelement)
3. [addToEnd](#addtoend)
4. [replaceByIndex](#replacebyindex)
5. [removeFirstElement](#removefirstelement)
6. [addToBeginning](#addtobeginning)
7. [replaceMultipleWithSingle](#replacemultiplewithsingle)
8. [joinArrayToString](#joinarraytostring)
9. [revealSecretMessage](#revealsecretmessage)
10. [getMessage](#getmessage)
11. [getLength](#getlength)

---

## constructor

Creates a new `MessageDecoder` instance with a copy of the provided message array.

### Syntax
```javascript
new MessageDecoder(message)
```

#### Parameters
`message`

An array of strings representing the encoded message.

#### Behaviour

- Creates a copy of the input array to prevent external mutations
- Stores the copy as an instance property `this.message`

### Example Usage

```javascript
const decoder = new MessageDecoder(['Hello', 'World']);
// decoder.message is ['Hello', 'World'] (a copy)
```

---

## removeLastElement

Removes the last element from the message array.

### Syntax
```javascript
decoder.removeLastElement()
```

#### Return value

Returns `this` to enable method chaining.

#### Behaviour

- Uses `.pop()` to remove the last element
- Modifies `this.message` in place

### Example Usage

```javascript
const decoder = new MessageDecoder(['one', 'two', 'three']);
decoder.removeLastElement();
decoder.getMessage(); // Returns ['one', 'two']
```

---

## addToEnd

Adds one or more elements to the end of the message array.

### Syntax
```javascript
decoder.addToEnd(...elements)
```

#### Parameters
`...elements`

One or more strings to add to the end of the array.

#### Return value

Returns `this` to enable method chaining.

#### Behaviour

- Uses `.push()` to add elements
- Accepts multiple arguments

### Example Usage

```javascript
const decoder = new MessageDecoder(['one', 'two']);
decoder.addToEnd('three');
decoder.getMessage(); // Returns ['one', 'two', 'three']

decoder.addToEnd('four', 'five');
decoder.getMessage(); // Returns ['one', 'two', 'three', 'four', 'five']
```

---

## replaceByIndex

Finds and replaces an element in the message array.

### Syntax
```javascript
decoder.replaceByIndex(oldElement, newElement)
```

#### Parameters
`oldElement`

The string to find and replace.

`newElement`

The string to replace it with.

#### Return value

Returns `this` to enable method chaining.

#### Behaviour

- Uses `.indexOf()` to find the element
- Replaces the element at that index
- Does nothing if the element is not found

### Example Usage

```javascript
const decoder = new MessageDecoder(['one', 'two', 'three']);
decoder.replaceByIndex('two', 'TWO');
decoder.getMessage(); // Returns ['one', 'TWO', 'three']

decoder.replaceByIndex('four', 'FOUR');
decoder.getMessage(); // Returns ['one', 'TWO', 'three'] (unchanged)
```

---

## removeFirstElement

Removes the first element from the message array.

### Syntax
```javascript
decoder.removeFirstElement()
```

#### Return value

Returns `this` to enable method chaining.

#### Behaviour

- Uses `.shift()` to remove the first element
- Modifies `this.message` in place

### Example Usage

```javascript
const decoder = new MessageDecoder(['one', 'two', 'three']);
decoder.removeFirstElement();
decoder.getMessage(); // Returns ['two', 'three']
```

---

## addToBeginning

Adds one or more elements to the beginning of the message array.

### Syntax
```javascript
decoder.addToBeginning(...elements)
```

#### Parameters
`...elements`

One or more strings to add to the beginning of the array.

#### Return value

Returns `this` to enable method chaining.

#### Behaviour

- Uses `.unshift()` to add elements
- Accepts multiple arguments
- Elements are added in the order provided

### Example Usage

```javascript
const decoder = new MessageDecoder(['three']);
decoder.addToBeginning('two');
decoder.getMessage(); // Returns ['two', 'three']

decoder.addToBeginning('zero', 'one');
decoder.getMessage(); // Returns ['zero', 'one', 'two', 'three']
```

---

## replaceMultipleWithSingle

Removes multiple consecutive elements and replaces them with a single element.

### Syntax
```javascript
decoder.replaceMultipleWithSingle(firstIndex, lastIndex, newElement)
```

#### Parameters
`firstIndex`

The index of the first element to remove.

`lastIndex`

The index of the last element to remove (inclusive).

`newElement`

The string to insert in their place.

#### Return value

Returns `this` to enable method chaining.

#### Behaviour

- Uses `.splice()` to remove and replace elements
- Removes elements from `firstIndex` to `lastIndex` (inclusive)
- Inserts `newElement` at `firstIndex`

### Example Usage

```javascript
const decoder = new MessageDecoder(['I', 'love', 'to', 'code', 'and', 'program']);
decoder.replaceMultipleWithSingle(3, 5, 'swim');
decoder.getMessage(); // Returns ['I', 'love', 'to', 'swim']
```

---

## joinArrayToString

Combines the message array into a single string with spaces.

### Syntax
```javascript
decoder.joinArrayToString()
```

#### Return value

Returns a `string` with all array elements joined by spaces.

**Note:** This method does NOT return `this`, so it breaks method chaining.

#### Behaviour

- Uses `.join(' ')` to create a string
- Does not modify `this.message`

### Example Usage

```javascript
const decoder = new MessageDecoder(['Hello', 'World']);
const result = decoder.joinArrayToString();
// result is 'Hello World'
// decoder.getMessage() still returns ['Hello', 'World']
```

---

## revealSecretMessage

Applies all transformations to decode the message and returns the result.

### Syntax
```javascript
decoder.revealSecretMessage()
```

#### Return value

Returns a `string` containing the decoded message.

#### Behaviour

**This method is already implemented for you.** It calls the other methods in the correct sequence:
1. Removes the last element
2. Adds 'to' and 'Program' to the end
3. Replaces 'easily' with 'right'
4. Removes the first element
5. Adds 'Programming' to the beginning
6. Replaces 'get', 'right', 'the', 'first', 'time,' with 'know,'
7. Joins the array into a string

### Example Usage

```javascript
const decoder = new MessageDecoder(startingMessage);
const secret = decoder.revealSecretMessage();
// Returns: 'Programming is not about what you know, it is about what you can figure out. -2015, Chris Pine, Learn to Program'
```

---

## getMessage

Returns a copy of the current message array.

### Syntax
```javascript
decoder.getMessage()
```

#### Return value

Returns a copy of `this.message` as an array.

#### Behaviour

- Returns a new array (not a reference)
- Useful for testing and debugging

### Example Usage

```javascript
const decoder = new MessageDecoder(['one', 'two']);
const message = decoder.getMessage();
// message is ['one', 'two']
message.push('three'); // Doesn't affect decoder.message
```

---

## getLength

Returns the current length of the message array.

### Syntax
```javascript
decoder.getLength()
```

#### Return value

Returns a `number` representing the array length.

### Example Usage

```javascript
const decoder = new MessageDecoder(['one', 'two', 'three']);
decoder.getLength(); // Returns 3
decoder.removeLastElement();
decoder.getLength(); // Returns 2
```

---

## Method Chaining

Most methods return `this`, allowing you to chain multiple operations:

```javascript
const result = new MessageDecoder(['one', 'two', 'three'])
    .removeFirstElement()
    .addToEnd('four')
    .replaceByIndex('two', 'TWO')
    .joinArrayToString();
// result is 'TWO three four'
```

**Note:** `.joinArrayToString()` returns a string, so it must be the last method in a chain.

---

## Array Methods Reference

This challenge uses the following array methods:

- **`.pop()`** - Removes and returns the last element ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop))
- **`.push()`** - Adds elements to the end ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push))
- **`.shift()`** - Removes and returns the first element ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift))
- **`.unshift()`** - Adds elements to the beginning ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift))
- **`.splice()`** - Removes/replaces/adds elements at any position ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice))
- **`.join()`** - Combines array elements into a string ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join))
- **`.indexOf()`** - Finds the index of an element ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf))