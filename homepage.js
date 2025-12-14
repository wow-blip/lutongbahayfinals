// Check if user is logged in; redirect to login if not
if (localStorage.getItem('loggedIn') !== 'true') {
  window.location.href = 'login.html';
}

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('show');
}
console.log("Homepage Loaded Successfully");

