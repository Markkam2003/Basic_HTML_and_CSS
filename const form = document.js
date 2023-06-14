const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  // Send username and password to server for authentication
});
