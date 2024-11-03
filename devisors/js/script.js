// script.js
console.log('PetCoop JavaScript loaded.');

// Simulated user database (for demonstration purposes)
const users = {};

// Signup function
function signup(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirm_password"]').value;

    // Check if username already exists
    if (users[username]) {
        alert('Username already exists. Please choose another one.');
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Store user data (in a real application, this would be a server call)
    users[username] = password;
    alert('Signup successful! You can now log in.');
    // Clear the form
    document.querySelector('#signupForm').reset(); 
}

// Login function
function login(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Check if user exists and password matches
    if (users[username] && users[username] === password) {
        alert('Login successful! Welcome back, ' + username + '!');
        // Redirect to another page or perform other actions
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

// Attach event listeners to forms
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('#signupForm'); // Updated to select by ID
    const loginForm = document.querySelector('#loginForm'); // Updated to select by ID

    if (signupForm) {
        signupForm.addEventListener('submit', signup);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', login);
    }
});
