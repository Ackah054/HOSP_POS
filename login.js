const users = [
  {
      username: "Omanhene",
      password: "12345"
  }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Basic validation (you can enhance this as needed)
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
      // Redirect to index.html
      window.location.href = "index.html";
  } else {
      alert("Check your username or password again");
  }
});
