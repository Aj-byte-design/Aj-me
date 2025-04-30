// Redirect users if they haven't logged in
document.addEventListener("DOMContentLoaded", function() {
    let loggedInUser = localStorage.getItem("username");
    
    if (!loggedInUser) {
        alert("Please log in first!");
        window.location.href = "LOGIN HTML.html";  // Redirects to login page
    }
});// JavaScript Document