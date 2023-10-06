const React = require('react');
const pokemonData = require('../models/pokemon');

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Show extends React.Component {
  capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  fixImageLink(link) {
    return link + '.jpg';
  }

  render() {
    const { id } = this.props.match.params;
    const selectedPokemon = pokemonData[id];

    return React.createElement('div', { style: myStyle },
      React.createElement('h1', null, 'Gotta Catch \'Em All'),
      React.createElement('h2', null, this.capitalizeFirstLetter(selectedPokemon.name)),
      React.createElement('img', { src: this.fixImageLink(selectedPokemon.img), alt: selectedPokemon.name }),
      React.createElement('a', { href: '/pokemon' }, 'Back')
    );
  }
}

module.exports = Show;
