document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("credentialsForm").onsubmit = function(event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var staffId = document.getElementById("staffId").value;

        // Check if the credentials match
        if (name === "Omanhene" && staffId === "12345") {
            window.location.href = "task.html";
        } else {
            alert("Sorry, try again.");
        }
    }
});
