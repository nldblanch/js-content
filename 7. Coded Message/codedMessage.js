const startingMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

class MessageDecoder {
  constructor(message) {
    this.message = [...message];
  }

  removeLastElement() {
    // your code here

    this.message.pop();

    return this;
  }

  addToEnd(...args) {
    // your code here

    this.message.push(...args);

    return this;
  }

  replaceByIndex(value, replaceValue) {
    // your code here

    const findIndexOfValue = this.message.indexOf(value);

    if (findIndexOfValue === -1) return;

    this.message[findIndexOfValue] = replaceValue;

    return this;
  }

  removeFirstElement() {
    // your code here

    this.message.shift();

    return this;
  }

  addToBeginning(...args) {
    // your code here

    this.message.unshift(...args);

    return this;
  }

  replaceMultipleWithSingle(firstIndex, secondIndex, itemToAdd) {
    // your code here

    const itemsToDelete = secondIndex - firstIndex + 1;

    this.message.splice(firstIndex, itemsToDelete, itemToAdd);

    return this;
  }

  joinArrayToString() {
    // your code here

    return this.message.join(" ");
  }

  revealSecretMessage() {
    this.removeLastElement();
    this.addToEnd("to", "Program");
    this.replaceByIndex("easily", "right");
    this.removeFirstElement();
    this.addToBeginning("Programming");

    const getIndex = this.message.indexOf("get");
    this.replaceMultipleWithSingle(getIndex, getIndex + 4, "know,");

    return this.joinArrayToString();
  }

  getMessage() {
    return [...this.message];
  }

  getLength() {
    return this.message.length;
  }
}

if (require.main === module) {
  const decoder = new MessageDecoder(startingMessage);
  console.log(decoder.revealSecretMessage());
}

module.exports = { MessageDecoder, startingMessage };
