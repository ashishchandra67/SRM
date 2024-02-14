// Simulating a user database (replace this with actual server-side code)
var users = [
    {email: "user1@example.com", password: "password1" },
    // Add more users as needed
];

function openTab(tabName) {
    // Your existing openTab function
}

function validateUser(email, password) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            return true;
        }
    }
    return false;
}
    if (login-email==null || login-email==""){  
        alert("Name can't be blank");  
        return false;  
      }
      else if(login-password.length<6){  
        alert("Password must be at least 6 characters long.");  
        return false;  
    }  
       


function login() {
    var email = document.getElementById(login-email).value;
    var password = document.getElementById(login-password).value;

    // Simulate server-side verification (replace this with actual server-side code)
    var isValidUser = validateUser(email, password);

    if (isValidUser) {
        console.log('Login successful. Redirecting to index.html');
        // Redirect to index.html or perform other actions after successful login
        window.location.href = 'index.html';
    } else {
        console.error('Invalid email or password. Please try again.');
        // Display an error message (you can customize this based on your UI)
        alert('Invalid email or password. Please try again.');
    }
}