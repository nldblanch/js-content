const {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  displayTemperature,
} = require("./temperature");

describe("Temperature Converter", () => {
  describe("Step 1: celsiusToFahrenheit - Basic Conversions", () => {
    test("converts 0°C to 32°F (freezing point)", () => {
      expect(celsiusToFahrenheit(0)).toBe(32);
    });

    test("converts 100°C to 212°F (boiling point)", () => {
      expect(celsiusToFahrenheit(100)).toBe(212);
    });

    test("converts 25°C to 77°F (room temperature)", () => {
      expect(celsiusToFahrenheit(25)).toBe(77);
    });
  });

  describe("Step 2: celsiusToFahrenheit - Edge Cases", () => {
    test("converts -40°C to -40°F (same temperature)", () => {
      expect(celsiusToFahrenheit(-40)).toBe(-40);
    });

    test("converts 37°C to 98.6°F (body temperature)", () => {
      expect(celsiusToFahrenheit(37)).toBeCloseTo(98.6, 1);
    });

    test("handles negative temperatures", () => {
      expect(celsiusToFahrenheit(-10)).toBe(14);
    });
  });

  describe("Step 3: fahrenheitToCelsius - Basic Conversions", () => {
    test("converts 32°F to 0°C (freezing point)", () => {
      expect(fahrenheitToCelsius(32)).toBe(0);
    });

    test("converts 212°F to 100°C (boiling point)", () => {
      expect(fahrenheitToCelsius(212)).toBe(100);
    });

    test("converts 77°F to 25°C (room temperature)", () => {
      expect(fahrenheitToCelsius(77)).toBe(25);
    });
  });

  describe("Step 4: fahrenheitToCelsius - Edge Cases", () => {
    test("converts -40°F to -40°C (same temperature)", () => {
      expect(fahrenheitToCelsius(-40)).toBe(-40);
    });

    test("converts 98.6°F to 37°C (body temperature)", () => {
      expect(fahrenheitToCelsius(98.6)).toBeCloseTo(37, 1);
    });

    test("handles negative temperatures", () => {
      expect(fahrenheitToCelsius(14)).toBe(-10);
    });
  });

  describe("Round-trip Conversions", () => {
    test("round-trip conversion maintains precision", () => {
      const originalCelsius = 25;
      const fahrenheit = celsiusToFahrenheit(originalCelsius);
      const backToCelsius = fahrenheitToCelsius(fahrenheit);
      expect(backToCelsius).toBeCloseTo(originalCelsius, 1);
    });

    test("round-trip with negative temperature", () => {
      const originalCelsius = -15;
      const fahrenheit = celsiusToFahrenheit(originalCelsius);
      const backToCelsius = fahrenheitToCelsius(fahrenheit);
      expect(backToCelsius).toBeCloseTo(originalCelsius, 1);
    });
  });

  describe("Extreme Temperatures", () => {
    test("handles very high temperatures", () => {
      expect(celsiusToFahrenheit(1000)).toBe(1832);
      expect(fahrenheitToCelsius(1832)).toBeCloseTo(1000, 1);
    });

    test("handles very low temperatures", () => {
      expect(celsiusToFahrenheit(-273)).toBeCloseTo(-459.4, 1);
      expect(fahrenheitToCelsius(-459.4)).toBeCloseTo(-273, 1);
    });
  });

  describe("Step 5: displayTemperature", () => {
    test("correctly displays temperature when given in celsius", () => {
      expect(displayTemperature(40, "celsius")).toBe(
        "The temperature is 40 degrees celsius, 104 degrees fahrenheit."
      );
      expect(displayTemperature(0, "celsius")).toBe(
        "The temperature is 0 degrees celsius, 32 degrees fahrenheit."
      );
    });
    test("correctly displays temperature when given in fahrenheit", () => {
      expect(displayTemperature(212, "fahrenheit")).toBe(
        "The temperature is 100 degrees celsius, 212 degrees fahrenheit."
      );
      expect(displayTemperature(-40, "fahrenheit")).toBe(
        "The temperature is -40 degrees celsius, -40 degrees fahrenheit."
      );
    });
    test("handles invalid options for temperature", () => {
      expect(displayTemperature(273, "kelvin")).toBe(
        "Invalid temperature option provided."
      );
      expect(displayTemperature(273)).toBe(
        "Invalid temperature option provided."
      );
    });
  });
});
