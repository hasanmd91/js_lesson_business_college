/** @param {string} name */
function getNumberOfChars(name) {
  let remName = name.replace(/ /g, "");
  return remName.length;
}

/** @param {string} name */
function getLower(name) {
  let lowerName = name.toLowerCase();
  return lowerName;
}

/** @param {string} name */
function getUpper(name) {
  let HigherName = name.toUpperCase();
  return HigherName;
}

/* Do not touch below this line  */

let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");

let name = document.querySelector("#your-name");

name.addEventListener("keyup", () => {
  answer1.textContent = getNumberOfChars(name.value);
  answer2.textContent = getLower(name.value);
  answer3.textContent = getUpper(name.value);
});
