const convertToWhaleTalk = require("./whaleTalk");

describe("Whale Talk Translator", () => {
  describe("Basic vowel extraction", () => {
    test("returns a single vowel in uppercase", () => {
      expect(convertToWhaleTalk("a")).toBe("A");
      expect(convertToWhaleTalk("i")).toBe("I");
      expect(convertToWhaleTalk("o")).toBe("O");
    });

    test("returns multiple vowels in uppercase", () => {
      expect(convertToWhaleTalk("ai")).toBe("AI");
      expect(convertToWhaleTalk("aoi")).toBe("AOI");
    });

    test("extracts only vowels (a, e, i, o, u) from a word", () => {
      expect(convertToWhaleTalk("hello")).toBe("EEO");
      expect(convertToWhaleTalk("world")).toBe("O");
    });
  });

  describe("Vowel doubling rules", () => {
    test("doubles the letter e", () => {
      expect(convertToWhaleTalk("e")).toBe("EE");
      expect(convertToWhaleTalk("see")).toBe("EEEE");
    });

    test("doubles the letter u", () => {
      expect(convertToWhaleTalk("u")).toBe("UU");
      expect(convertToWhaleTalk("cute")).toBe("UUEE");
    });

    test("does not double other vowels (a, i, o)", () => {
      expect(convertToWhaleTalk("a")).toBe("A");
      expect(convertToWhaleTalk("i")).toBe("I");
      expect(convertToWhaleTalk("o")).toBe("O");
    });

    test("doubles e and u in a word with multiple vowels", () => {
      expect(convertToWhaleTalk("eureka")).toBe("EEUUEEA");
    });
  });

  describe("Consonant handling", () => {
    test("ignores consonants", () => {
      expect(convertToWhaleTalk("bcdfghjklmnpqrstvwxz")).toBe("");
    });

    test("ignores the letter y (not a vowel in whale talk)", () => {
      expect(convertToWhaleTalk("y")).toBe("");
      expect(convertToWhaleTalk("why")).toBe("");
      expect(convertToWhaleTalk("rhythm")).toBe("");
    });

    test("extracts vowels and ignores consonants in mixed text", () => {
      expect(convertToWhaleTalk("bat")).toBe("A");
      expect(convertToWhaleTalk("hello")).toBe("EEO");
    });
  });

  describe("Case handling", () => {
    test("converts lowercase input to uppercase output", () => {
      expect(convertToWhaleTalk("aeiou")).toBe("AEEIOUU");
    });

    test("converts uppercase input to uppercase output", () => {
      expect(convertToWhaleTalk("AEIOU")).toBe("AEEIOUU");
    });

    test("converts mixed case input to uppercase output", () => {
      expect(convertToWhaleTalk("HeLLo")).toBe("EEO");
      expect(convertToWhaleTalk("WoRlD")).toBe("O");
    });
  });

  describe("Special characters and spaces", () => {
    test("ignores spaces", () => {
      expect(convertToWhaleTalk("a b c")).toBe("A");
      expect(convertToWhaleTalk("hello world")).toBe("EEOO");
    });

    test("ignores punctuation", () => {
      expect(convertToWhaleTalk("hello!")).toBe("EEO");
      expect(convertToWhaleTalk("Hello, World!")).toBe("EEOO");
      expect(convertToWhaleTalk("a-whale-of-a-deal!")).toBe("AAEEOAEEA");
    });

    test("ignores numbers", () => {
      expect(convertToWhaleTalk("123")).toBe("");
      expect(convertToWhaleTalk("hello123")).toBe("EEO");
    });
  });

  describe("Edge cases", () => {
    test("returns empty string for empty input", () => {
      expect(convertToWhaleTalk("")).toBe("");
    });

    test("returns empty string for input with no vowels", () => {
      expect(convertToWhaleTalk("bcdfg")).toBe("");
      expect(convertToWhaleTalk("xyz")).toBe("");
    });

    test("handles strings with only vowels", () => {
      expect(convertToWhaleTalk("aeiou")).toBe("AEEIOUU");
      expect(convertToWhaleTalk("AEIOU")).toBe("AEEIOUU");
    });
  });

  describe("Complete examples", () => {
    test('converts "turpentine and turtles" correctly', () => {
      expect(convertToWhaleTalk("turpentine and turtles")).toBe("UUEEIEEAUUEE");
    });

    test('converts "Hi, Human" correctly', () => {
      expect(convertToWhaleTalk("Hi, Human")).toBe("IUUA");
    });

    test('converts "a whale of a deal!" correctly', () => {
      expect(convertToWhaleTalk("a whale of a deal!")).toBe("AAEEOAEEA");
    });

    test("converts complex sentences correctly", () => {
      expect(convertToWhaleTalk("The quick brown fox")).toBe("EEUUIOO");
    });
  });

  describe("Type validation", () => {
    test("returns empty string for non-string input", () => {
      expect(convertToWhaleTalk(null)).toBe("");
      expect(convertToWhaleTalk(undefined)).toBe("");
      expect(convertToWhaleTalk(123)).toBe("");
      expect(convertToWhaleTalk(true)).toBe("");
      expect(convertToWhaleTalk([])).toBe("");
      expect(convertToWhaleTalk({})).toBe("");
    });
  });
});
