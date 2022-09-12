/**
 * Complete the function getFullName such that it returns the full name of the user (the first name and the last name separated by a space character).
You have to use array destructuring and call the variables firstName and lastName.
 * @param {string[]} user
 */
const getFullName = (user) => {
  let [firstName] = user;
  let [, lastname] = user;

  return firstName + " " + lastname;
};

// Sample usage - do not modify
console.log(getFullName(["Sam", "Blue"])); // "Sam Blue"
console.log(getFullName(["Alex", "Green"])); // "Alex Green"
