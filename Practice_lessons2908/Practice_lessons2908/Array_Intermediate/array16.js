"use strict";

/**
Complete the function isAppUsed such that it returns true when the app parameter
it receives exists in the apps parameter, and false otherwise.


/**
 * @param {string[]} apps
 * @param {string} app
 */
function isAppUsed(apps, app) {
  return apps.includes(app);
}

// Sample usage - do not modify
console.log(isAppUsed(["Twitter", "Calculator"], "Calculator")); // true
console.log(isAppUsed(["Clock", "Calculator"], "Safari")); // false
