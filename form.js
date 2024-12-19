document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('booking-form');
    const closeButton = document.getElementById('close-form');
    const successMessage = document.getElementById('success-message');

    // Close button behavior
    closeButton.addEventListener('click', () => {
        window.location.href = "index.html"; // Redirect to index.html
    });

    // Appointment booking form submission
    appointmentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const appointment = {
            name: document.getElementById('name').value,
            location: document.getElementById('location').value,
            phone: document.getElementById('phone').value,
            doctor: document.getElementById('doctor').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value
        };

        // Retrieve existing appointments from local storage or initialize an empty array
        const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

        // Add the new appointment to the array
        appointments.push(appointment);

        // Store the updated appointments in local storage
        localStorage.setItem('appointments', JSON.stringify(appointments));

        // Display success message
        successMessage.style.display = 'block';
        
        // Hide the message and redirect to index.html after 2 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
            window.location.href = "index.html"; // Redirect to index.html after booking
        }, 2000);
    });
});
