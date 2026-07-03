## Step 1: Implementing `removeLastElement()`

<details>
<summary>Reveal</summary>

```javascript
removeLastElement() {
    this.message.pop();
    return this;
}
```

</details>

## Step 2: Implementing `addToEnd()`

<details>
<summary>Reveal</summary>

```javascript
addToEnd(...args) {
    this.message.push(...args);
    return this;
}
```

</details>

## Step 3: Implementing `replaceByIndex()`

<details>
<summary>Reveal</summary>

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

## Step 4: Implementing `removeFirstElement()`

<details>
<summary>Reveal</summary>

```javascript
removeFirstElement() {
    this.message.shift();
    return this;
}
```

</details>

## Step 5: Implementing `addToBeginning()`

<details>
<summary>Reveal</summary>

```javascript
addToBeginning(...args) {
    this.message.unshift(...args);
    return this;
}
```

</details>

## Step 6: Implementing `replaceMultipleWithSingle()`

<details>
<summary>Reveal</summary>

```javascript
replaceMultipleWithSingle(firstIndex, lastIndex, newElement) {
    const deleteCount = lastIndex - firstIndex + 1;
    this.message.splice(firstIndex, deleteCount, newElement);
    return this;
}
```

</details>

## Step 7: Implementing `joinArrayToString()`

<details>
<summary>Reveal</summary>

```javascript
joinArrayToString() {
    return this.message.join(' ');
}
```

</details>

## Helper Methods

<details>
<summary>Reveal</summary>

```javascript
getMessage() {
    return [...this.message];
}

getLength() {
    return this.message.length;
}
```

</details>
