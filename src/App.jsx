import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import SideBar from "./components/SideBar";
import PokeballSpinner from "./components/PokeballSpinner";
import pokeball from "../public/pokeball.svg";

function App() {
  const [data, setData] = useState([]);
  const [pokemonIdData, setPokemonIdData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      const result = await response.json();
      setData(result.results);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handlePokemonClick = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const result = await response.json();
    setPokemonIdData(result);
  };

  return (
    <div id="main">
      <header>
        <div id="divImgLogo">
          <h1>Pokedex</h1>
          <img src={pokeball} alt="Pokeball" id="pokeball" />
        </div>
      </header>
      <div id="contenido">
        <div className="divCardsContainer">
          <div id="divCards">
            {loading && <PokeballSpinner />}
            {!loading &&
              data.map((pokemon, index) => (
                <Card
                  key={index}
                  data={pokemon}
                  onPokemonClick={handlePokemonClick}
                />
              ))}
          </div>
        </div>
        <div className="info-Poke">
        {pokemonIdData && <SideBar dataPok={pokemonIdData} setActive={setActive}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
