const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint GET
app.get('/', (req, res) => {
  res.send('Hello, world! This is a GET request.');
});

// Endpoint POST
app.post('/teste', (req, res) => {
  res.send('Hello, world! This is a POST request.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
