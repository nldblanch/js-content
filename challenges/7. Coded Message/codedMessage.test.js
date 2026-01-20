const { MessageDecoder, startingMessage } = require('./codedMessage');

describe.skip('Coded Message', () => {
    let decoder;

    beforeEach(() => {
        decoder = new MessageDecoder(['one', 'two', 'three']);
    });

    describe('MessageDecoder class', () => {
        test('should create a new instance with a message', () => {
            expect(decoder).toBeInstanceOf(MessageDecoder);
            expect(decoder.getMessage()).toEqual(['one', 'two', 'three']);
        });

        test('should not mutate the original array passed to constructor', () => {
            const original = ['a', 'b', 'c'];
            const decoder = new MessageDecoder(original);
            decoder.removeLastElement();
            expect(original).toEqual(['a', 'b', 'c']);
        });
    });

    describe('removeLastElement', () => {
        test('should remove the last element from the message', () => {
            decoder.removeLastElement();
            expect(decoder.getMessage()).toEqual(['one', 'two']);
        });

        test('should use the array pop method', () => {
            const popSpy = jest.spyOn(Array.prototype, 'pop');
            decoder.removeLastElement();
            expect(popSpy).toHaveBeenCalled();
            popSpy.mockRestore();
        });

        test('should return this for method chaining', () => {
            const result = decoder.removeLastElement();
            expect(result).toBe(decoder);
        });
    });

    describe('addToEnd', () => {
        test('should add an element to the end of the message', () => {
            decoder.addToEnd('four');
            expect(decoder.getMessage()).toEqual(['one', 'two', 'three', 'four']);
        });

        test('should use the array push method', () => {
            const pushSpy = jest.spyOn(Array.prototype, 'push');
            decoder.addToEnd('four');
            expect(pushSpy).toHaveBeenCalled();
            pushSpy.mockRestore();
        });

        test('should handle multiple arguments', () => {
            decoder.addToEnd('four', 'five', 'six');
            expect(decoder.getMessage()).toEqual(['one', 'two', 'three', 'four', 'five', 'six']);
        });

        test('should return this for method chaining', () => {
            const result = decoder.addToEnd('four');
            expect(result).toBe(decoder);
        });
    });

    describe('replaceByIndex', () => {
        test('should replace the element at the specified index', () => {
            decoder.replaceByIndex('two', 'TWO');
            expect(decoder.getMessage()).toEqual(['one', 'TWO', 'three']);
        });

        test('should not modify the message if the old element is not found', () => {
            decoder.replaceByIndex('four', 'FOUR');
            expect(decoder.getMessage()).toEqual(['one', 'two', 'three']);
        });

        test('should use indexOf to find the element', () => {
            const indexOfSpy = jest.spyOn(Array.prototype, 'indexOf');
            decoder.replaceByIndex('two', 'TWO');
            expect(indexOfSpy).toHaveBeenCalledWith('two');
            indexOfSpy.mockRestore();
        });

        test('should return this for method chaining', () => {
            const result = decoder.replaceByIndex('two', 'TWO');
            expect(result).toBe(decoder);
        });
    });

    describe('removeFirstElement', () => {
        test('should remove the first element from the message', () => {
            decoder.removeFirstElement();
            expect(decoder.getMessage()).toEqual(['two', 'three']);
        });

        test('should use the array shift method', () => {
            const shiftSpy = jest.spyOn(Array.prototype, 'shift');
            decoder.removeFirstElement();
            expect(shiftSpy).toHaveBeenCalled();
            shiftSpy.mockRestore();
        });

        test('should return this for method chaining', () => {
            const result = decoder.removeFirstElement();
            expect(result).toBe(decoder);
        });
    });

    describe('addToBeginning', () => {
        test('should add an element to the beginning of the message', () => {
            decoder.addToBeginning('zero');
            expect(decoder.getMessage()).toEqual(['zero', 'one', 'two', 'three']);
        });

        test('should use the array unshift method', () => {
            const unshiftSpy = jest.spyOn(Array.prototype, 'unshift');
            decoder.addToBeginning('zero');
            expect(unshiftSpy).toHaveBeenCalled();
            unshiftSpy.mockRestore();
        });

        test('should handle multiple arguments', () => {
            decoder.addToBeginning('negative-one', 'zero');
            expect(decoder.getMessage()).toEqual(['negative-one', 'zero', 'one', 'two', 'three']);
        });

        test('should return this for method chaining', () => {
            const result = decoder.addToBeginning('zero');
            expect(result).toBe(decoder);
        });
    });

    describe('replaceMultipleWithSingle', () => {
        test('should replace multiple elements with a single element', () => {
            const decoder = new MessageDecoder(['I', 'love', 'to', 'code', 'and', 'program']);
            decoder.replaceMultipleWithSingle(3, 5, 'swim');
            expect(decoder.getMessage()).toEqual(['I', 'love', 'to', 'swim']);
        });

        test('should use the array splice method', () => {
            const spliceSpy = jest.spyOn(Array.prototype, 'splice');
            const decoder = new MessageDecoder(['I', 'love', 'to', 'code', 'and', 'program']);
            decoder.replaceMultipleWithSingle(3, 5, 'swim');
            expect(spliceSpy).toHaveBeenCalledWith(3, 3, 'swim');
            spliceSpy.mockRestore();
        });

        test('should return this for method chaining', () => {
            const result = decoder.replaceMultipleWithSingle(1, 2, 'new');
            expect(result).toBe(decoder);
        });
    });

    describe('joinArrayToString', () => {
        test('should join the message into a string with spaces', () => {
            const result = decoder.joinArrayToString();
            expect(result).toBe('one two three');
        });

        test('should use the array join method', () => {
            const joinSpy = jest.spyOn(Array.prototype, 'join');
            decoder.joinArrayToString();
            expect(joinSpy).toHaveBeenCalledWith(' ');
            joinSpy.mockRestore();
        });

        test('should not return this (returns string instead)', () => {
            const result = decoder.joinArrayToString();
            expect(typeof result).toBe('string');
        });
    });

    describe('getLength', () => {
        test('should return the current length of the message', () => {
            expect(decoder.getLength()).toBe(3);
            decoder = new MessageDecoder(['a', 'b', 'c', 'd']);
            expect(decoder.getLength()).toBe(4);
        });
    });

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

    describe('revealSecretMessage', () => {
        test('should reveal the secret message correctly', () => {
            const decoder = new MessageDecoder(startingMessage);
            const secretMessage = decoder.revealSecretMessage();
            expect(secretMessage).toBe('Programming is not about what you know, it is about what you can figure out. -2015, Chris Pine, Learn to Program');
        });

        test('should use the class methods to decode', () => {
            const decoder = new MessageDecoder(startingMessage);
            
            // Spy on all the methods
            const removeLastSpy = jest.spyOn(decoder, 'removeLastElement');
            const addToEndSpy = jest.spyOn(decoder, 'addToEnd');
            const replaceByIndexSpy = jest.spyOn(decoder, 'replaceByIndex');
            const removeFirstSpy = jest.spyOn(decoder, 'removeFirstElement');
            const addToBeginSpy = jest.spyOn(decoder, 'addToBeginning');
            const replaceMultipleSpy = jest.spyOn(decoder, 'replaceMultipleWithSingle');
            const joinSpy = jest.spyOn(decoder, 'joinArrayToString');

            decoder.revealSecretMessage();

            // Verify methods were called
            expect(removeLastSpy).toHaveBeenCalled();
            expect(addToEndSpy).toHaveBeenCalled();
            expect(replaceByIndexSpy).toHaveBeenCalled();
            expect(removeFirstSpy).toHaveBeenCalled();
            expect(addToBeginSpy).toHaveBeenCalled();
            expect(replaceMultipleSpy).toHaveBeenCalled();
            expect(joinSpy).toHaveBeenCalled();
        });
    });
});