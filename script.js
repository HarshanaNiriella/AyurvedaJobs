document.getElementById('jobForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const title = document.getElementById('title').value;
    const organization = document.getElementById('organization').value;
    const location = document.getElementById('location').value;
    const salary = document.getElementById('salary').value;
    const holidays = document.getElementById('holidays').value;

    const templateParams = {
        title: title,
        organization: organization,
        location: location,
        salary: salary,
        holidays: holidays,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('responseMessage').textContent = 'Job vacancy submitted successfully!';
            document.getElementById('responseMessage').style.color = 'green';
            document.getElementById('jobForm').reset(); // Reset form fields
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('responseMessage').textContent = 'Error submitting form. Please try again.';
            document.getElementById('responseMessage').style.color = 'red';
        });
});
