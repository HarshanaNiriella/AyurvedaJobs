document.getElementById('jobForm').addEventListener('submit', async (e) => {
  e.preventDefault();  // Prevent the form from refreshing the page

  const data = {
    title: document.getElementById('title').value,
    organization: document.getElementById('organization').value,
    location: document.getElementById('location').value,
    salary: document.getElementById('salary').value,
    holidays: document.getElementById('holidays').value,
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycby6eP4ADuqLwn7UTie7JrcHulmssdpRCn4MmGgM_x6lGiUGcrLekCmSuJtm4p82j8do6Q/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.status === 'success') {
      alert('Job submitted successfully!');
      e.target.reset();  // Reset the form after successful submission
    } else {
      alert('Submission failed. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  }
});
