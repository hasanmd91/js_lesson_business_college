/**
 * @param {array} grades
 * @param {number} grade
 */
function addGrade(grades, grade) {}

/**
 * @param {array} grades
 */
function getNumberOfGrades(grades) {}

/**
 * @param {array} grades
 */
function getFirstGrade(grades) {}

/**
 * @param {array} grades
 */
function getLastGrade(grades) {}

/**
 * @param {array} grades
 */
function isTestTooEasy(grades) {}

/**
 * @param {array} grades
 * @param {number} grade
 */
function gradeExists(grades, grade) {}

/**
 * @param {array} grades
 */
function exportCSV(grades) {}

//
// Sample usage do not modify below this line
let gradesForm = document.querySelector('#grades-form');
let yourGrade = document.querySelector('#your-grade');
const gradeToCheck = document.querySelector('#grade-to-check');

let grades = [14, 9, 13, 15, 18];

function render(grades) {
  console.log('Grades: ' + grades.join(', '));
  let tbody = document.querySelector('#stats-table tbody');
  tbody.innerHTML = `<tr>
    <td>${getNumberOfGrades(grades)}</td>
    <td>${getFirstGrade(grades)}</td>
    <td>${getLastGrade(grades)}</td>
    </tr>`;

  let tbody2 = document.querySelector('#stats-table2 tbody');
  tbody2.innerHTML = `<tr>
    <td>${isTestTooEasy(grades)}</td>
    <td>${gradeExists(grades, Number.parseInt(gradeToCheck.value, 10))}</td>
    <td>${exportCSV(grades)}</td>
    </tr>`;
}

gradeToCheck.addEventListener('change', () => {
  render(grades);
});

gradesForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let newGrade = Number.parseInt(yourGrade.value, 10);
  grades = addGrade(grades, newGrade);
  yourGrade.value = '';
  render(grades);
});

render(grades);
