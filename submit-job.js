exports.handler = async (event) => {
  const formData = JSON.parse(event.body);

  // Write the form data to a JSON file
  const fs = require('fs');
  const filePath = './jobs.json';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const jobs = JSON.parse(data);
    jobs.push(formData);

    fs.writeFile(filePath, JSON.stringify
