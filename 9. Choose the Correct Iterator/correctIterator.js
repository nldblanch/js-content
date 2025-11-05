const cities = ['Edinburgh', 'Chennao', 'Hannover', 'Tokyo', 'Accra', 'Lahore', 'Eskisehir', 'Northampton', 'Taipei'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.method(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.method(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.method((acc, currVal) => {
  return acc + currVal[0]
}, "T");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.method(num => num - 5);

// Choose a method that will return a boolean value
nums.method(num => num < 0);
