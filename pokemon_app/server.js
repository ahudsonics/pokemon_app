const express = require('express');
const app = express();
const port = 3000;

const pokemon = require('./models/pokemon');

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/pokemon', (req, res) => {
  res.sendFile(__dirname + '/views/Index.jsx');
});





