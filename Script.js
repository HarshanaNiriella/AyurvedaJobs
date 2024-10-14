document.getElementById('jobForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    title: document.getElementById('title').value,
    organization: document.getElementById('organization').value,
    location: document.getElementById('location').value,
    salary: document.getElementById('salary').value,
    holidays: document.getElementById('holidays').value,
  };

  try {
    const response = await fetch('YOUR_DEPLOYMENT_URL', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.status === 'success') {
      alert('Job submitted successfully!');
      e.target.reset();
    } else {
      alert('Failed to submit the job. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. Please try again later.');
  }
});
