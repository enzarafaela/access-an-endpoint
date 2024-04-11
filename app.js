const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint GET
app.get('/', (req, res) => {
  res.send('Hello, world! This is a GET request.');
});

app.get('/authenticateUser', (req, res) => {
    const username = req.query.username;
    const password = req.query.password; 
    
    if (username === '' || password === '') {
        res.send('Status Error 400 - Bad Request');
    } else if (username === 'John Due' && password === '123456') {
        res.send('Status Success 200 - User Already Exists');
    } else {
        res.send('Status Error 404 - User not Found');
    }
});

// Endpoint POST
app.post('/teste', (req, res) => {
  res.send('Hello, world! This is a POST request.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
