const express = require('express');
const app = express();

// Endpoint GET
app.get('/', (req, res) => {
  res.send('Hello, world! This is a GET request.');
});

// Endpoint POST
app.post('/teste', (req, res) => {
  res.send('Hello, world! This is a POST request.');
});


