const { calculateDogAge } = require('./dogAge');

describe('Dog Age Calculator', () => {
  describe.skip('Basic Functionality', () => {
     test('converts generic human years correctly', () => {
      expect(calculateDogAge(10)).toBe(53);
      expect(calculateDogAge(20)).toBe(93);
    });

    test('handles large numbers correctly', () => {
      expect(calculateDogAge(100)).toBe(413);
      expect(calculateDogAge(200)).toBe(813);
    });
  });

 describe.skip('Advanced Cases', () => {
   test('converts 1 human year correctly', () => {
      expect(calculateDogAge(1)).toBe(10.5);
    });

    test('converts 2 human years correctly', () => {
      expect(calculateDogAge(2)).toBe(21);
    });

    test('converts 3 human years correctly', () => {
      expect(calculateDogAge(4)).toBe(29);
    });
  });

  describe.skip('Edge Cases', () => {
    test('handles 0 years correctly', () => {
      expect(calculateDogAge(0)).toBe(0);
    });

    test('handles fractional years correctly', () => {
      expect(calculateDogAge(2.5)).toBe(23);
    });

    test('returns 0 for negative years', () => {
      expect(calculateDogAge(-1)).toBe(0);
    });
  });

  describe.skip('Input Validation', () => {
    test('returns 0 for non-numeric input', () => {
      expect(calculateDogAge('five')).toBe(0);
    });

    test('returns 0 for null input', () => {
      expect(calculateDogAge(null)).toBe(0);
    });

    test('returns 0 for undefined input', () => {
      expect(calculateDogAge(undefined)).toBe(0);
    });
    
    test('returns 0 for an empty object input', () => {
      expect(calculateDogAge({})).toBe(0);
    });

    test('returns 0 for an NaN input', () => {
      expect(calculateDogAge(NaN)).toBe(0);
    });
  });
});