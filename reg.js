document.getElementById('register-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('register-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
});

document.getElementById('login-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
});