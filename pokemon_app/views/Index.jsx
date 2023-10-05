import React from 'react';

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

const Index = () => {
  return (
    <html>
      <head>
        <title>Pokemon Index</title>
      </head>
      <body style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>
          {/* Display the list of Pokemon */}
          {pokemon.map((poke, index) => (
            <li key={index}>{poke.name}</li>
          ))}
        </ul>
      </body>
    </html>
  );
};

export default Index;
