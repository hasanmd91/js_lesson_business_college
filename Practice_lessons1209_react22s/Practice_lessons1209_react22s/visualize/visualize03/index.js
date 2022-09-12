const select = document.querySelector('#countries-dropdown');

select.addEventListener('change', (event) => {
  console.log(event.currentTarget.value); // or select.value
});
