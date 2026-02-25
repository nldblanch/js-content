# Function Documentation

## What's Included

1. [celsiusToFahrenheit](#celsiustofahrenheit)
2. [fahrenheitToCelsius](#fahrenheittocelsius)
3. [displayTemperature](#displaytemperature)

## celsiusToFahrenheit

The `celsiusToFahrenheit` method receives the temperature in celsius and converts it to fahrenheit, returning an exact number. 

### Syntax

```javascript
celsiusToFahrenheit(celsius);
```

#### Parameters

`celsius`

A number to convert to fahrenheit.

#### Return value
A decimal number representing the exact temperature in fahrenheit.

### Example Usage

```javascript
celsiusToFahrenheit(0); // Returns 32
celsiusToFahrenheit(100); // Returns 212
```

## fahrenheitToCelsius

The `fahrenheitToCelsius` method receives the temperature in fahrenheit and converts it to celsius, returning an exact number. 

### Syntax

```javascript
fahrenheitToCelsius(fahrenheit);
```

#### Parameters

`fahrenheit`

A number to convert to celsius.

#### Return value
A decimal number representing the exact temperature in celsius.

### Example Usage

```javascript
fahrenheitToCelsius(32); // Returns 0
fahrenheitToCelsius(212); // Returns 100
```

## displayTemperature

The `displayTemperature` method receives the temperature and an option describing the format of the temperature. It then returns a formatted string containing the temperature in celsius and fahrenheit.

### Syntax

```javascript
displasyTemperature(temperature, option);
```

#### Parameters

`temperature`

A number representing the exact temperature.

`option`

A string representing whether the temperature is in celsius or fahrenheit.

#### Return value
A string displaying the temperature (rounded down) in both celsius and fahrenheit.

### Example Usage

```javascript
displayTemperature(40, 'celsius'); 
// Returns 'The temperature is 40 degrees celsius, 92 degrees fahrenheit.'
displayTemperature(212, 'fahrenheit'); 
// Returns 'The temperature is 212 degrees fahrenheit, 40 degrees celsius.'
```