function convertToWhaleTalk(text) {
  // your code here

  // Return empty string for non-string input
  if (typeof text !== "string" || !text) {
    return "";
  }

  const stringOfCharacters = text.split("");

  // KEEP VOWELS
  const filteredCharacters = stringOfCharacters.filter((character) => {
    const lowerCaseCharacter = character.toLowerCase();

    const keepCharacterList = ["a", "e", "i", "o", "u"];

    return keepCharacterList.indexOf(lowerCaseCharacter) !== -1;
  });

  // DOUBLE 'E' & 'U'

  const newStringOfCharacters = [];

  filteredCharacters.forEach((character) => {
    const lowerCaseCharacter = character.toLowerCase();

    // PUSH upper case character
    const characterToPush = character.toUpperCase();

    const checkCharacterList = ["e", "u"];

    if (checkCharacterList.indexOf(lowerCaseCharacter) === -1) {
      newStringOfCharacters.push(characterToPush);
      return;
    }

    // Must be 'e' or 'u' character, so DOUBLE push.

    newStringOfCharacters.push(characterToPush, characterToPush);
  });

  // CONVERT array back into STRING
  return newStringOfCharacters.join("");
}

module.exports = convertToWhaleTalk;
