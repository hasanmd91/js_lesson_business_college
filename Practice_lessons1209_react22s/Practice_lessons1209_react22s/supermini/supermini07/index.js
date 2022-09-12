class Tasks {
  constructor() {
    this.tasks = [];
  }

  /** @param {string} csvString */
  importCsv(csvString) {}
}

//Sample usage do not modify (but feel free to read)
const dropdown = document.querySelector('#csv-dropdown');
const tbody = document.querySelector('#tbody');

const tasks = new Tasks();

function render() {
  tbody.innerHTML = '';
  tasks.tasks.forEach(function (task) {
    tbody.insertAdjacentHTML(
      'beforeend',
      `<tr>
            <th>Task</th>
            <td>${task}</td>
        </tr>`
    );
  });
  tbody.insertAdjacentHTML(
    'beforeend',
    `<tr class="separator">
            <th>Number of tasks</th>
            <td>${tasks.getCount()}</td>
        </tr>
        <tr>
            <th>First task</th>
            <td>${tasks.getFirst()}</td>
        </tr>
        <tr>
            <th>Last task</th>
            <td>${tasks.getLast()}</td>
        </tr>
        <tr>
            <th>Lower-cased tasks</th>
            <td>${tasks.getUnformattedTasks()}</td>
        </tr>
        `
  );
}

dropdown.addEventListener('change', (event) => {
  tasks.importCsv(dropdown.value);
  render();
});
