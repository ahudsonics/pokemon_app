const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon'); // Path may vary based on your file structure

app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
  res.json(pokemon);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
