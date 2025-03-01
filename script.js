// Function for Login
function login(event, userType) {
    event.preventDefault();

    let username, password;

    // Get username and password based on user type
    if (userType === 'student') {
        username = document.getElementById('studentUsername').value;
        password = document.getElementById('studentPassword').value;

        // Check if the registration number is numeric
        if (!/^\d+$/.test(username)) {
            alert('Registration number must be numeric.');
            return;
        }
    } else if (userType === 'teacher') {
        username = document.getElementById('teacherUsername').value;
        password = document.getElementById('teacherPassword').value;
    }

    // Check if both username and password are filled
    if (username && password) {
        alert('Login successful!');
        // Redirect to another website (for example)
        window.location.href = 'https://codepen.io/pen'; // Change this to your desired URL
    } else {
        alert('Please enter both username and password.');
    }
}

// Function for Student Login display
function showStudentLogin() {
    document.getElementById('studentLogin').style.display = 'block';
    document.getElementById('teacherLogin').style.display = 'none';
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('aboutSection').style.display = 'none';
}

// Function for Teacher Login display
function showTeacherLogin() {
    document.getElementById('teacherLogin').style.display = 'block';
    document.getElementById('studentLogin').style.display = 'none';
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('aboutSection').style.display = 'none';
}

// Function to handle the menu toggle
function myMenuFunction() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

// Function to toggle Student password visibility
function toggleStudentPassword() {
    const passwordField = document.getElementById('studentPassword');
    const toggleIcon = document.getElementById('toggleStudentPassword');

    // Toggle password visibility
    if (passwordField.type === 'password') {
        passwordField.type = 'text'; // Show the password
        toggleIcon.classList.remove('bx-hide');
        toggleIcon.classList.add('bx-show');
    } else {
        passwordField.type = 'password'; // Hide the password
        toggleIcon.classList.remove('bx-show');
        toggleIcon.classList.add('bx-hide');
    }
}

// Function to toggle Teacher password visibility
function toggleTeacherPassword() {
    const passwordField = document.getElementById('teacherPassword');
    const toggleIcon = document.getElementById('toggleTeacherPassword');

    // Toggle password visibility
    if (passwordField.type === 'password') {
        passwordField.type = 'text'; // Show the password
        toggleIcon.classList.remove('bx-hide');
        toggleIcon.classList.add('bx-show');
    } else {
        passwordField.type = 'password'; // Hide the password
        toggleIcon.classList.remove('bx-show');
        toggleIcon.classList.add('bx-hide');
    }
}

// Function to show About Section
function showAbout() {
    document.getElementById('aboutSection').style.display = 'block';
    document.getElementById('studentLogin').style.display = 'none';
    document.getElementById('teacherLogin').style.display = 'none';
    document.getElementById('homeSection').style.display = 'none';
}

// Function to show Home Section
function showHome() {
    document.getElementById('homeSection').style.display = 'block';
    document.getElementById('aboutSection').style.display = 'none';
    document.getElementById('studentLogin').style.display = 'none';
    document.getElementById('teacherLogin').style.display = 'none';
}
