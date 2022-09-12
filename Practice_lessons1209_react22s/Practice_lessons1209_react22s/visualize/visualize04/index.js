const name = document.querySelector('#user-name');

name.addEventListener('keyup', (event) => {
  console.log(event.key);
});
