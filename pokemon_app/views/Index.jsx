const React = require('react');
const pokemon = require('../models/pokemon');

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Index extends React.Component {
  capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  render() {
    const pokemonList = pokemon.map((poke, index) => {
      const capitalizedPokemonName = this.capitalizeFirstLetter(poke.name);
      const link = React.createElement('a', { href: `/pokemon/${index}` }, capitalizedPokemonName);
      return React.createElement('li', { key: index }, link);
    });

    return React.createElement('div', { style: myStyle },
      React.createElement('h1', null, 'See All The Pokemon!'),
      React.createElement('ul', null, ...pokemonList)
    );
  }
}

module.exports = Index;