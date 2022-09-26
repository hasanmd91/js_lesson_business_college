"use strict";

// Sample usage - do not modify
const sumGrades = (grades, callback) => {
  // simulate expensive operation
  setTimeout(() => {
    const sum = grades.reduce((total, current) => total + current, 0);
    if (callback) {
      callback(sum); // call the success callback with the sum
    }
  }, 1000);
};

/**
Update the calculateSum function such that the console.log("The sum is: X") runs after the sumGrades function has finished executing. Also, replace X with the actual sum of the grades.
Note that the sumGrades function accepts a success callback as its second parameter which receives the sum of the grades as a parameter...*/

/**
 * @param {number[]} grades
 */
const calculateSum = (grades) => {
  console.log(`the sum is: ${grades}`);
};

// Sample usage - do not modify
sumGrades([18, 10], calculateSum);
sumGrades([15, 10, 20], calculateSum);
