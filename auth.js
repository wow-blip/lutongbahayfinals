// Minimal validation for demo
const enableSubmitIfValid = (form, submitBtnId) => {
  const submitBtn = document.getElementById(submitBtnId);
  const checkValidity = () => {
    const inputs = Array.from(form.querySelectorAll('input[required]'));
    const allValid = inputs.every(i => i.value.trim() !== '');
    const checkbox = form.querySelector('#terms');
    // Removed disabling to make button always visible and enabled
    // submitBtn.disabled = !(allValid && (!checkbox || checkbox.checked));
  };

  form.addEventListener('input', checkValidity);
  const checkbox = form.querySelector('#terms');
  if (checkbox) checkbox.addEventListener('change', checkValidity);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // For now, just log the data and redirect to the homepage
    const data = new FormData(form);
    const obj = Object.fromEntries(data.entries());
    console.log('Form submitted', obj);
    // Set login state in localStorage
    localStorage.setItem('loggedIn', 'true');
    // Simple success flow: redirect to homepage
    window.location.href = 'homepage.html';
  });
};

const loginForm = document.getElementById('loginForm');
if (loginForm) enableSubmitIfValid(loginForm, 'submitBtn');
const signupForm = document.getElementById('signupForm');
if (signupForm) enableSubmitIfValid(signupForm, 'submitBtn');

// Support a left/right split on smaller devices where image appears above form for mobile

// Optional: add simple Google button click handler to show a toast alert
document.querySelectorAll('.social-btn.google').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Continue with Google — demo only');
  });
});
