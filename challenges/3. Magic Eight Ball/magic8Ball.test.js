const { magicEightBall, logMagicEightBall } = require('./magic8Ball');
const magic8Ball = require('./magic8Ball')
describe('Magic Eight Ball', () => {
    // The tests expect to see all of these responses. You can update them for your own implementation!
    const validResponses = [
        'It is certain',
        'It is decidedly so',
        'Reply hazy try again',
        'Cannot predict now',
        'Do not count on it',
        'My sources say no',
        'Outlook not so good',
        'Signs point to yes'
    ];

    const errorMessage = 'Error: Invalid response'

    beforeEach(() => {
        jest.spyOn(Math, 'random').mockReturnValue(0);
        jest.spyOn(magic8Ball, 'magicEightBall');
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    describe.skip('magicEightBall', () => {
        test('returns valid responses for different random numbers', () => {
            [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875].forEach(randomValue => {
                Math.random.mockReturnValue(randomValue);
                const response = magic8Ball.magicEightBall();
                expect(validResponses).toContain(response);
            });
        });

        test('returns "Error: Invalid response" when random number is mocked to be invalid', () => {
            Math.random.mockReturnValue(1);
            const response = magicEightBall();
            expect(response).toBe(errorMessage);
        });

        test('always returns one of the valid responses or error', () => {
            for (let i = 0; i < 100; i++) {
                const response = magic8Ball.magicEightBall();
                expect(validResponses).toContain(response);
            }
        });
    });

    describe.skip('logMagicEightBall', () => {
        test('logs greeting and question correctly', () => {
            console.log = jest.fn().mockImplementation(() => magic8Ball.magicEightBall());

            logMagicEightBall('Will I succeed?', 'Jane');

            expect(console.log).toHaveBeenCalledWith('Hello, Jane!');
            expect(console.log).toHaveBeenCalledWith("User's question: Will I succeed?");
            expect(console.log).toHaveBeenCalledWith('It is certain');
            expect(magic8Ball.magicEightBall).toHaveBeenCalled()

            const lastCall = console.log.mock.calls[2][0];
            expect(validResponses).toContain(lastCall);
        });

        test('logs greeting without user name', () => {
            console.log = jest.fn().mockImplementation(() => magic8Ball.magicEightBall());

            logMagicEightBall('Will I succeed?');

            expect(console.log).toHaveBeenCalledWith('Hello!');
            expect(console.log).toHaveBeenCalledWith("User's question: Will I succeed?");
            expect(console.log).toHaveBeenCalledWith('It is certain');
            expect(magic8Ball.magicEightBall).toHaveBeenCalled()

            const lastCall = console.log.mock.calls[2][0];
            expect(validResponses).toContain(lastCall);
        });
    });
});
