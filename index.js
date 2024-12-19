
        // Open and close modals
        function openDoctorLogin() {
            document.getElementById('doctorLoginModal').style.display = 'block';
        }

        function closeDoctorLogin() {
            document.getElementById('doctorLoginModal').style.display = 'none';
        }

        // Handle doctor login form submission
        document.getElementById('doctorLoginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const doctorName = document.getElementById('doctorName').value;
            const doctorId = document.getElementById('doctorId').value;
            
            // Replace this with actual verification logic
            if (doctorId === '12345') { // Example ID for verification
                alert('Doctor login successful!');
                closeDoctorLogin();
                window.location.href = 'task.html'; // Redirect to task page
            } else {
                alert('Invalid Doctor ID');
            }
        });

        // Close modals when clicking outside of them
        window.onclick = function(event) {
            if (event.target.className === 'modal') {
                closeDoctorLogin();
            }
        }