document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    // Here you can add your form validation logic if needed
    // For now, we will just redirect to the login page after form submission
    
    window.location.href = 'login.html';
});

document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const appointment = { name, date, time };
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    window.location.href = 'task.html';
});
