const rps = require('./rockPaperScissors');

describe('Rock Paper Scissors', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe.skip('getUserChoice', () => {
        test('accepts valid choices (case-insensitive)', () => {
            expect(rps.getUserChoice('Rock')).toBe('rock');
            expect(rps.getUserChoice('PAPER')).toBe('paper');
            expect(rps.getUserChoice('scissors')).toBe('scissors');
        });

        test('logs error and returns undefined for invalid input', () => {
            const spy = jest.spyOn(console, 'log').mockImplementation(() => { });
            expect(rps.getUserChoice('fork')).toBeUndefined();
            expect(spy).toHaveBeenCalledWith('Error!');
        });

        test('logs error and returns undefined for non-string input', () => {
            const spy = jest.spyOn(console, 'log').mockImplementation(() => { });
            expect(rps.getUserChoice(null)).toBeUndefined();
            expect(spy).toHaveBeenCalledWith('Error!');
        });
    });

    describe.skip('getComputerChoice', () => {
        test('all mocked Math.random values return valid choices', () => {
            const mockValues = [0, 0.34, 0.99];
            const validChoices = ['rock', 'paper', 'scissors'];
            const results = [];

            mockValues.forEach(value => {
                jest.spyOn(Math, 'random').mockReturnValue(value);
                results.push(rps.getComputerChoice());
                jest.restoreAllMocks();
            });

            results.forEach(choice => {
                expect(validChoices).toContain(choice);
            });
        });
        test('the function returns each valid choice', () => {
            const mockValues = [0, 0.34, 0.99];
            const validChoices = ['rock', 'paper', 'scissors'];
            const results = [];

            mockValues.forEach(value => {
                jest.spyOn(Math, 'random').mockReturnValue(value);
                results.push(rps.getComputerChoice());
                jest.restoreAllMocks();
            });

            validChoices.forEach(choice => {
                expect(results).toContain(choice);
            });
        });

    });

    describe.skip('determineWinner', () => {
        test('tie cases', () => {
            expect(rps.determineWinner('rock', 'rock')).toBe('The game is a tie!');
            expect(rps.determineWinner('paper', 'paper')).toBe('The game is a tie!');
            expect(rps.determineWinner('scissors', 'scissors')).toBe('The game is a tie!');
        });

        test('rock beats scissors, loses to paper', () => {
            expect(rps.determineWinner('rock', 'scissors')).toBe('You won!');
            expect(rps.determineWinner('rock', 'paper')).toBe('The computer won!');
        });

        test('paper beats rock, loses to scissors', () => {
            expect(rps.determineWinner('paper', 'rock')).toBe('You won!');
            expect(rps.determineWinner('paper', 'scissors')).toBe('The computer won!');
        });

        test('scissors beats paper, loses to rock', () => {
            expect(rps.determineWinner('scissors', 'paper')).toBe('You won!');
            expect(rps.determineWinner('scissors', 'rock')).toBe('The computer won!');
        });

        test('it handles invalid options', () => {
            expect(rps.determineWinner('fork', 'knife')).toBe('Error: invalid choices');
        });

    });

    describe.skip('Bonus: bomb cheat code', () => {
        test('bomb always wins', () => {
            expect(rps.determineWinner('bomb', 'rock')).toBe('You won!');
            expect(rps.determineWinner('bomb', 'paper')).toBe('You won!');
            expect(rps.determineWinner('bomb', 'scissors')).toBe('You won!');
        });
    })

    // Shouldn't need to touch these
    describe('playGame', () => {
        beforeEach(() => {
            jest.clearAllMocks();
            console.log = jest.fn();
        });

        test('handles valid user input correctly', async () => {
            const mockAsk = jest.fn().mockResolvedValue('rock');
            const mockGetUserChoice = jest.fn().mockReturnValue('rock');
            const mockGetComputerChoice = jest.fn().mockReturnValue('scissors');
            const mockDetermineWinner = jest.fn().mockReturnValue('You won!');
            console.log = jest.fn();

            await rps.playGame({
                askFn: mockAsk,
                getUserChoiceFn: mockGetUserChoice,
                getComputerChoiceFn: mockGetComputerChoice,
                determineWinnerFn: mockDetermineWinner
            });

            expect(console.log).toHaveBeenCalledWith('You threw: rock');
            expect(console.log).toHaveBeenCalledWith('The computer threw: scissors');
            expect(console.log).toHaveBeenCalledWith('You won!');
        });

        test('handles invalid user input by re-prompting then closing', async () => {
            const mockAsk = jest.fn()
                .mockResolvedValueOnce('invalid')
                .mockResolvedValueOnce('paper');
            const mockGetUserChoice = jest.fn()
                .mockReturnValueOnce('')
                .mockReturnValueOnce('paper');
            const mockGetComputerChoice = jest.fn().mockReturnValue('rock');
            const mockDetermineWinner = jest.fn().mockReturnValue('You won!');
            console.log = jest.fn();

            await rps.playGame({
                askFn: mockAsk,
                getUserChoiceFn: mockGetUserChoice,
                getComputerChoiceFn: mockGetComputerChoice,
                determineWinnerFn: mockDetermineWinner
            });

            expect(mockAsk).toHaveBeenCalledTimes(2);
            expect(console.log).toHaveBeenCalledWith('You threw: paper');
            expect(console.log).toHaveBeenCalledWith('The computer threw: rock');
            expect(console.log).toHaveBeenCalledWith('You won!');
        });


        test('handles bomb cheat code', async () => {
            await rps.playGame({
                askFn: jest.fn().mockResolvedValue('bomb'),
                getUserChoiceFn: jest.fn().mockReturnValue('bomb'),
                getComputerChoiceFn: jest.fn().mockReturnValue('rock'),
                determineWinnerFn: jest.fn().mockReturnValue('You won!')
            });

            expect(console.log).toHaveBeenCalledWith('You threw: bomb');
            expect(console.log).toHaveBeenCalledWith('The computer threw: rock');
            expect(console.log).toHaveBeenCalledWith('You won!');
        });

    });

});
