'use strict';

/**
Complete the function getFullName such that it returns the full name from the user object when it exists.
 Otherwise, it should return undefined.
 * @param {object} user
 * @param {object} [user.info]
 * @param {last} [user.info.name]
 */
const getFullName = user => {

}

// Sample usage - do not modify
console.log(getFullName({info: {name: "Sam"}})); // "Sam"
console.log(getFullName({info: null})); // undefined
console.log(getFullName({})); // undefined
