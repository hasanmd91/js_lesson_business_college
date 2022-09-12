'use strict';

/*
A helper function getDate() that returns a string representing the current date (for example, 22/3/2021).
However, this function fails 50% of the time (in an attempt to simulate the concept of functions that might fail sometimes).

When it fails, the function showDate() also breaks because it's calling getDate().
Update the implementation of showDate() such that it returns the date (when possible), otherwise the string "Could not get date".
*/

const showDate = () => {
    const date = getDate();
    return date;
}

// Sample usage - do not modify
console.log(showDate());

const getDate = () => {
   // this function fails 50% of the time
   if (Math.random() < 0.5) {
       // fail
       throw Error("An error has occurred");
   } else {
       //return current date
       const date = new Date();
       return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
   }
}
