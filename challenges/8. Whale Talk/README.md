# 🐋 Challenge 8: Whale Talk

## Objective

Create a program that translates human text into "whale talk" by extracting and transforming vowels according to whale language rules.

## Learning Goals

- Practice using loops to iterate through strings
- Work with string and array methods
- Develop problem solving skills

## Success Criteria

It doesn't matter how you solve this challenge. The tests only check the output, so the solution is up to you! Your solution should match this criteria:

- Function correctly identifies vowels (a, e, i, o, u)
- Consonants and 'y' are ignored
- Vowels 'e' and 'u' are doubled. Eg: 'e' -> 'ee' & 'u' -> 'uu'
- Output is in uppercase
- All test cases pass

<br >
<br >
<br >

# Function Documentation

## What's Included

1. [translateToWhaleTalk](#translatetowhaletalk)

## translateToWhaleTalk

The `translateToWhaleTalk` method receives a string of human text and converts it into whale language by extracting vowels and applying whale talk rules.

### Syntax

```javascript
translateToWhaleTalk(text);
```

#### Parameters

`text`

A string to convert to whale talk.

#### Return value
A string representing the whale talk translation in uppercase. Vowels (a, e, i, o, u) are extracted, 'e' and 'u' are doubled, and the result is capitalized. Returns an empty string if no vowels are found.

### Example Usage

```javascript
translateToWhaleTalk('turpentine and turtles'); // Returns 'UUEEIEEAUUEE'
translateToWhaleTalk('Hi, Human'); // Returns 'IUUA'
translateToWhaleTalk('a whale of a deal!'); // Returns 'AAEEOAEEA'
```
