"use strict";

/**
 * @param {number} age
 */
function canVote(age) {
  return age >= 18;
}

// Sample usage - do not modify
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(17)); // false
