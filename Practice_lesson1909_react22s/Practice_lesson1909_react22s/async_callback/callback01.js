"use strict";

// Sample usage - do not modify
const welcomeUser = (name, callback) => {
  setTimeout(() => {
    console.log(`Welcome ${name}`);
    if (callback) {
      callback(); // call the success callback
    }
  }, 1000);
};
/**
Update the sayHello function such that the console.log("Done!") runs after the welcomeUser function has finished executing.
Note that the welcomeUser function accepts a success callback as its second parameter....*/

/**
 * @param {string} name
 */
const sayHello = () => {
  console.log("Done!");
};

// Sample usage - do not modify
welcomeUser("Sam", sayHello);
