document.getElementById('jobForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const title = document.getElementById('title').value;
    const organization = document.getElementById('organization').value;
    const location = document.getElementById('location').value;
    const salary = document.getElementById('salary').value;
    const holidays = document.getElementById('holidays').value;

    const response = await fetch('https://script.google.com/macros/s/AKfycby6eP4ADuqLwn7UTie7JrcHulmssdpRCn4MmGgM_x6lGiUGcrLekCmSuJtm4p82j8do6Q/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            title,
            organization,
            location,
            salary,
            holidays,
        }),
    });

    const result = await response.json();
    const messageElement = document.getElementById('responseMessage');

    if (result.status === 'success') {
        messageElement.textContent = 'Job vacancy submitted successfully!';
        messageElement.style.color = 'green';
        document.getElementById('jobForm').reset(); // Reset form fields
    } else {
        messageElement.textContent = `Error: ${result.message}`;
        messageElement.style.color = 'red';
    }
});
