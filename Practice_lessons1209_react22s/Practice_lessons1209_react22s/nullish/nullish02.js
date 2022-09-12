'use strict';

/**
Refactor the getWelcomeMessage function without using an if condition.
The functionality should stay the same.
*/
/**
 * @param {object} user
 * @param {string} [user.fullName]
 */
const getWelcomeMessage = user => {
    if (user.fullName) {
        return `Welcome ${user.fullName}`;
    } else {
        return `Welcome user`;
    }
}

// Sample usage - do not modify
console.log(getWelcomeMessage({fullName: "Sam Green"})); // "Welcome Sam Green"
console.log(getWelcomeMessage({})); // "Welcome user"
