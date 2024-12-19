document.querySelector("#loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const staffId = document.querySelector("#staffId").value.trim();

    // Check credentials
    if (name === "Godfred" && staffId === "12345") {
        alert("Login successful! Redirecting to the Pharmacy page...");
        window.location.href = "pharm.html"; // Redirect to pharm.html
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
