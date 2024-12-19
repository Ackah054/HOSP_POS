document.addEventListener('DOMContentLoaded', function() {
    const tasksWrapper = document.getElementById('tasksWrapper');
    const deadlineList = document.querySelector('.deadline-list');
    const reviewedTasksWrapper = document.getElementById('reviewedTasksWrapper');
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const reviewedAppointments = JSON.parse(localStorage.getItem('reviewedAppointments')) || [];
    const currentDate = new Date();

    // Display each appointment as a task
    appointments.forEach(appointment => {
        const appointmentDate = new Date(`${appointment.date}T${appointment.time}`);
        const task = document.createElement('div');
        task.classList.add('task');

        const checkbox = document.createElement('input');
        checkbox.classList.add('task-item');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', `item-${Date.now()}`);

        const label = document.createElement('label');
        label.setAttribute('for', checkbox.id);

        const labelText = document.createElement('span');
        labelText.classList.add('label-text');
        labelText.textContent = `Appointment with ${appointment.name} on ${appointment.date} at ${appointment.time}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Finish';
        deleteButton.classList.add('delete-btn');

        deleteButton.addEventListener('click', function() {
            tasksWrapper.removeChild(task);

            // Move the finished task to the reviewed appointments list
            reviewedAppointments.push(appointment);
            localStorage.setItem('reviewedAppointments', JSON.stringify(reviewedAppointments));

            // Remove the finished task from the original appointments list
            const updatedAppointments = appointments.filter(appt => appt !== appointment);
            localStorage.setItem('appointments', JSON.stringify(updatedAppointments));

            // Redirect to review.html after finishing the appointment
            window.location.href = "tskpages/review.html";
        });

        label.appendChild(labelText);
        task.appendChild(checkbox);
        task.appendChild(label);
        task.appendChild(deleteButton);

        tasksWrapper.appendChild(task);

        // Check if the appointment is at the current hour and add to Upcoming Deadlines
        if (appointmentDate.getFullYear() === currentDate.getFullYear() &&
            appointmentDate.getMonth() === currentDate.getMonth() &&
            appointmentDate.getDate() === currentDate.getDate() &&
            appointmentDate.getHours() === currentDate.getHours()) {
            const deadlineItem = document.createElement('li');
            deadlineItem.textContent = `Appointment with ${appointment.name} at ${appointment.time}`;
            deadlineList.appendChild(deadlineItem);
        }
    });

    // Function to update the display of reviewed tasks
  
});
