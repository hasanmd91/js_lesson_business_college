const email = document.querySelector('#login-email');
const password = document.querySelector('#login-password');

email.addEventListener('focus', () => {
  console.log('email: focus inside (cursor in)');
});
email.addEventListener('blur', () => {
  console.log('email: blur (cursor out)');
});
password.addEventListener('focus', () => {
  console.log('password: focus (cursor in)');
});
password.addEventListener('blur', () => {
  console.log('password: blur (cursor out)');
});
