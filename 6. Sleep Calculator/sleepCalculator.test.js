const {
  getSleepHours,
  getActualSleepHours,
  getIdealSleepHours,
  calculateSleepDebt,
} = require("./sleepCalculator");

// This is just a placeholder to prevent test suite errors
describe("sleepCalculator", () => {
  describe("getSleepHours", () => {
    // Tests for getSleepHours
    test("when given monday, returns 8", () => {
      // arrange
      const idealHours = 8;
      const dayOfWeek = "monday";

      // act
      const returnSleepHours = getSleepHours(dayOfWeek);

      //assert
      expect(returnSleepHours).toBe(idealHours);
    });

    test("return Error Message when invalid input provided", () => {
      // arrange
      const errorMessage = "Invalid day";
      const invalidInput = "fakeDay123";

      // act
      const returnSleepHours = getSleepHours(invalidInput);

      expect(returnSleepHours.message).toBeTruthy();

      //assert
      expect(returnSleepHours.message).toBe(errorMessage);
    });
  });

  describe("getActualSleepHours", () => {
    // Tests for getActualSleepHours

    test("returns correct total", () => {
      // arrange
      const actualHours =
        getSleepHours("monday") +
        getSleepHours("tuesday") +
        getSleepHours("wednesday") +
        getSleepHours("thursday") +
        getSleepHours("friday") +
        getSleepHours("saturday") +
        getSleepHours("Sunday");

      // act
      const returnedActualHours = getActualSleepHours();

      // assert response is NOT error
      expect(returnedActualHours instanceof Error).toBe(false);

      // assert correct return value
      expect(returnedActualHours).toBe(actualHours);
    });
  });

  describe("getIdealSleepHours", () => {
    // Tests for getIdealSleepHours

    test("returns correct weekly total for 8 hours/night", () => {
      // arrange
      const idealHours = 8;
      // act
      const result = getIdealSleepHours(idealHours);
      // assert
      expect(result).toBe(56);
    });
  });

  describe("calculateSleepDebt", () => {
    // Tests for calculateSleepDebt

    test("getIdealSleepHours returns a lower number than getActualSleepHours", () => {
      // arrange
      const idealHours = 8;
      const totalIdealSleepHours = getIdealSleepHours(idealHours);
      const actualSleepHours = getActualSleepHours();
      // act
      const sleepDebt = calculateSleepDebt(idealHours);
      // assert
      expect(sleepDebt).toBe(
        `You got ${
          totalIdealSleepHours - actualSleepHours
        } hour(s) less sleep than needed. Get some rest.`
      );
    });

    test("getIdealSleepHours returns a higher number than getActualSleepHours", () => {
      // arrange
      const idealHours = 5;
      const totalIdealSleepHours = getIdealSleepHours(idealHours);
      const actualSleepHours = getActualSleepHours();
      // act
      const sleepDebt = calculateSleepDebt(idealHours);
      // assert
      expect(sleepDebt).toBe(
        `You got ${
          actualSleepHours - totalIdealSleepHours
        } hour(s) more sleep than needed.`
      );
    });

    test("getIdealSleepHours returns the same number as getActualSleepHours", () => {
      // arrange
      const idealHours = 50 / 7;
      const totalIdealSleepHours = getIdealSleepHours(idealHours);
      const actualSleepHours = getActualSleepHours();
      // act
      const sleepDebt = calculateSleepDebt(idealHours);
      // assert
      expect(sleepDebt).toBe("Perfect amount of sleep.");
    });

    test("behaviour when ideal is not given to calculateSleepDebt", () => {
      // arrange
      // act
      const sleepDebt = calculateSleepDebt();
      // assert
      expect(sleepDebt).toBe(
        "You got 6 hour(s) less sleep than needed. Get some rest."
      );
    });
  });
});
