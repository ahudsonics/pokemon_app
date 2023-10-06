const express = require('express');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Show = require('./views/Show.jsx');
const pokemonData = require('./models/pokemon');

const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
  const indexPath = path.join(__dirname, 'views', 'Index.jsx');
  const Index = require(indexPath); // Require the JSX file

  const renderedIndex = ReactDOMServer.renderToString(React.createElement(Index));
  res.send(renderedIndex);
});

app.get('/pokemon/:id', (req, res) => {
  const { id } = req.params;

  // Check if the ID is valid
  if (isNaN(id) || id < 0 || id >= pokemonData.length) {
    res.status(404).send('Pokemon not found');
    return;
  }

  const renderedShow = ReactDOMServer.renderToString(
    React.createElement(Show, { match: { params: { id } } })
  );
  res.send(renderedShow);
});

