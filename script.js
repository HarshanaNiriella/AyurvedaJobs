const form = document.getElementById('jobForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const organization = document.getElementById('organization').value;
  const location = document.getElementById('location').value;
  const salary = document.getElementById('salary').value;
  const holidays = document.getElementById('holidays').value;
  const contactEmail = document.getElementById('contactEmail').value;
  const contactPhone = document.getElementById('contactPhone').value;

  const formData = {
    title,
    organization,
    location,
    salary,
    holidays,
    contactEmail,
    contactPhone,
  };

  // Send a POST request to the serverless function
  fetch('/submit-job', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});
