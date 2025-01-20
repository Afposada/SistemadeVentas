document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'admin' && password === '123') {
    window.location.href = '/home/home.html';
  } else {
    alert('Invalid username or password');
  }
});