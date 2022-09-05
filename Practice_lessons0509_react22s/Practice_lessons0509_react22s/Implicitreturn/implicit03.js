"use strict";

/**
Complete the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).
Use an arrow function (implicit return is optional).
/**
 * @param {number} value
 */
const getPositiveTemperatures = (temp) => temp.filter((tem) => tem > 0);

// Sample usage - do not modify
console.log(getPositiveTemperatures([2, 3, -4, -5, -6])); //
