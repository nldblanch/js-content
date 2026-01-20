const startingMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

class MessageDecoder {
    constructor(message) {
        this.message = [...message];
    }

    removeLastElement() {
        // your code here
    }

    addToEnd() {
        // your code here
    }

    replaceByIndex() {
        // your code here
    }

    removeFirstElement() {
        // your code here
    }

    addToBeginning() {
        // your code here
    }

    replaceMultipleWithSingle() {
        // your code here
    }

    joinArrayToString() {
        // your code here
    }

    revealSecretMessage() {
        this.removeLastElement();
        this.addToEnd('to', 'Program');
        this.replaceByIndex('easily', 'right');
        this.removeFirstElement();
        this.addToBeginning('Programming');

        const getIndex = this.message.indexOf('get');
        this.replaceMultipleWithSingle(getIndex, getIndex + 4, 'know,');

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