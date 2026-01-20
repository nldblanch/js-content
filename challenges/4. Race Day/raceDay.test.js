const { registerRunner } = require('./raceDay');

describe('Race Day', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test.skip('should return an object', () => {
        const result = registerRunner(25, true)
        expect(result).toBeDefined();
        expect(result).toEqual(expect.objectContaining({}))
    });

    test.skip('object should have raceNumber, startTime and message properties', () => {
        const result = registerRunner(25, true)
        expect(result).toBeDefined();
        expect(result).toEqual(expect.objectContaining({
            raceNumber: expect.any(Number),
            startTime: expect.any(String),
            message: expect.any(String)
        }))
    });

    test.skip('generated raceNumber should be between 0 and 1999', () => {
        jest.spyOn(Math, 'random');
        const info = registerRunner(30, true);
        expect(Math.random).toHaveBeenCalled()
        expect(info.raceNumber).toBeGreaterThanOrEqual(0);
        expect(info.raceNumber).toBeLessThan(2000);
    });

    test.skip('registerRunner generates raceNumber in 0-999 range when registering late runners', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0);
        const a = registerRunner(30, false);
        expect(a.raceNumber).toBe(0);
        jest.spyOn(Math, 'random').mockReturnValue(0.999);
        const b = registerRunner(30, false);
        expect(b.raceNumber).toBe(999);
    });

    test.skip('registerRunner generates raceNumber in 1000-1999 range when registering early runners', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0);
        const a = registerRunner(30, true);
        expect(a.raceNumber).toBe(1000);
        jest.spyOn(Math, 'random').mockReturnValue(0.999);
        const b = registerRunner(30, true);
        expect(b.raceNumber).toBe(1999);
    });

    test.skip('only those 18+ get numbers between 1000 and 1999', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0.5);
        const a = registerRunner(30, true);
        expect(a.raceNumber).toBeGreaterThanOrEqual(1000);
        expect(a.raceNumber).toBeLessThan(2000);
        const b = registerRunner(12, true);
        expect(b.raceNumber).toBeGreaterThanOrEqual(0);
        expect(b.raceNumber).toBeLessThan(1000);
    });

    test.skip('early adult gets +1000 race number and 9:30 am', () => {
        const { raceNumber, startTime, message } = registerRunner(25, true);
        expect(raceNumber).toEqual(expect.any(Number));
        expect(raceNumber).toBeGreaterThanOrEqual(1000)
        expect(raceNumber).toBeLessThan(2000)
        expect(startTime).toBe('9:30 am');
        expect(message).toMatch(`Your race number is ${raceNumber}. You will race at ${startTime}.`);
    });

    test.skip('late adult gets below 1000 number and 11:00 am', () => {
        const { raceNumber, startTime, message } = registerRunner(25, false);
        expect(raceNumber).toEqual(expect.any(Number));
        expect(raceNumber).toBeGreaterThanOrEqual(0)
        expect(raceNumber).toBeLessThan(1000)
        expect(startTime).toBe('11:00 am');
        expect(message).toMatch(`Your race number is ${raceNumber}. You will race at ${startTime}.`);

    });

    test.skip('youth (under 18) runs at 12:30 pm regardless of registration', () => {
        const a = registerRunner(16, true);
        expect(a.raceNumber).toEqual(expect.any(Number));
        expect(a.raceNumber).toBeGreaterThanOrEqual(0)
        expect(a.raceNumber).toBeLessThan(1000)
        expect(a.startTime).toBe('12:30 pm');
        expect(a.message).toMatch(`Your race number is ${a.raceNumber}. You will race at ${a.startTime}.`);

        const b = registerRunner(16, false);
        expect(b.raceNumber).toEqual(expect.any(Number));
        expect(b.raceNumber).toBeGreaterThanOrEqual(0)
        expect(b.raceNumber).toBeLessThan(1000)
        expect(b.startTime).toBe('12:30 pm');
        expect(b.message).toMatch(`Your race number is ${b.raceNumber}. You will race at ${b.startTime}.`);

    });

    test.skip('age exactly 18 should see registration desk', () => {
        const early = registerRunner(18, true);
        expect(early.raceNumber).toEqual(expect.any(Number));
        expect(early.raceNumber).toBeGreaterThanOrEqual(0)
        expect(early.raceNumber).toBeLessThan(1000)
        expect(early.startTime).toBe('');
        expect(early.message).toBe('Please see the registration desk.');

        const late = registerRunner(18, false);
        expect(late.raceNumber).toEqual(expect.any(Number));
        expect(late.raceNumber).toBeGreaterThanOrEqual(0)
        expect(late.raceNumber).toBeLessThan(1000)
        expect(late.startTime).toBe('');
        expect(late.message).toBe('Please see the registration desk.');
    });

    test.skip('many combinations always return expected message format', () => {
        const combos = [
            { age: 30, reg: true, msg: '9:30 am' },
            { age: 30, reg: false, msg: '11:00 am' },
            { age: 10, reg: true, msg: '12:30 pm' },
            { age: 10, reg: false, msg: '12:30 pm' },
            { age: 18, reg: true, msg: '' },
            { age: 18, reg: false, msg: '' },
        ];
        combos.forEach(c => {
            const info = registerRunner(c.age, c.reg);
            if (c.msg) {
                expect(info.message).toMatch(new RegExp(`Your race number is ${info.raceNumber}\\. You will race at ${c.msg}\\.`));
            } else {
                expect(info.message).toBe('Please see the registration desk.');
            }
        });
    });
});