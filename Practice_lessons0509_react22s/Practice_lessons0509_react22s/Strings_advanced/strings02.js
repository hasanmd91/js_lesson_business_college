"use strict";

/**
Complete the function getUnit such that it returns the unit of temperature measurement used in the text it receives.

It should return "Celsius" when °C is found in the string.
It should return "Fahrenheit" when °F is found in the string.
It should return "N/A" (Not Applicable) in all other cases.
To avoid small typos, make sure to copy the strings (such as Celsius and the degree symbol ) from the challenge description.

/**
 * @param {string} text
 */
const getUnit = (text) => {
  if (text.includes("C")) {
    return "Celsius";
  } else if (text.includes("F")) {
    return "Fahrenheit";
  } else return "N/A";
};

// Sample usage - do not modify
console.log(getUnit("It is 15°C today")); // Celsius
console.log(getUnit("It was 90°F yesterday")); // Fahrenheit
console.log(getUnit("Why is it 20°C")); // Celsius
console.log(getUnit("Are you sure that it'll be 55°F?")); // Fahrenheit
console.log(getUnit("It is expected to be cold.")); // N/A
