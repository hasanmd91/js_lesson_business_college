"use strict";

/**
Complete the function getFreezingTemperatures such that it returns an array containing the freezing temperatures (the temperatures that are below 0).
Use an arrow function (implicit return is optional).
/**
 * @param {number} value
 */
const getFreezingTemperatures = (arr) => arr.filter((temp) => temp < 0);

// Sample usage - do not modify
console.log(getFreezingTemperatures([5, -12, 3])); // [-5]
console.log(getFreezingTemperatures([1, -3, -2, 4, 10])); // [-3, -2]
