function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Add your authentication logic here
    if (username === "example" && password === "password") {
        alert("Login successful!");
    } else {
        alert("Login failed. Please check your username and password.");
    }
}
