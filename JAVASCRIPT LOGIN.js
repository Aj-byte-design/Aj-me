document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    // 📝 Signup - Store user data
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let username = document.getElementById("newUsername").value;
            let password = document.getElementById("newPassword").value;
            
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            
            alert("Signup successful! Please login.");
            window.location.href = "LOGIN HTML.html"; // Redirect to login
        });
    }

    // 🔐 Login - Validate user credentials
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let inputUsername = document.getElementById("username").value;
            let inputPassword = document.getElementById("password").value;
            
            let storedUsername = localStorage.getItem("username");
            let storedPassword = localStorage.getItem("password");

            if (inputUsername === storedUsername && inputPassword === atob(storedPassword)) {
                alert("Login successful!");
                window.location.href = "EXTERNAL HOME 2.html"; // Redirects to homepage
            } else {
                alert("Incorrect credentials! Please try again.");
            }
        });
    }
});