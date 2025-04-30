// JavaScript Documentdocument.addEventListener("DOMContentLoaded", function() {
    // Logout function
    function logoutUser() {
        if (confirm("Are you sure you want to log out?")) { 
            localStorage.removeItem("username");  // Removes stored login data
            localStorage.removeItem("password");
            alert("Logged out successfully!");
            window.location.href = "LOGIN HTML.html";  // Redirects to the login page
        }
    }

    // Attach the function to the button
    let logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", logoutUser);
    }
});