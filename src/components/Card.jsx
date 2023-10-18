import React, { useState, useEffect } from "react";

function Card({ data, onPokemonClick }) {
  const [pokemonNumber, setPokemonNumber] = useState(null);

  useEffect(() => {
    const fetchPokemonNumber = async () => {
      const number = data.url.match(/\/(\d+)\//)[1];
      setPokemonNumber(number);
    };

    fetchPokemonNumber();
  }, [data.url]);

  const handleCardClick = () => {
    onPokemonClick(data.name);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      {pokemonNumber && (
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`}
          alt={data.name}
        />
      )}
      <h3>{data.name}</h3>
    </div>
  );
}

export default Card;
