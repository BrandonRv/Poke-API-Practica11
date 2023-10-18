import React from "react";

function SideBar({ dataPok, setActive }) {
  return (
    <aside id="sideBar">
      <div>
        <button onClick={() => setActive(false)}>X</button>
      </div>
      <h2>{dataPok.name}</h2>
      <div id="sideBar-Img">
        <img src={dataPok.sprites.other.home.front_default} alt="Pokemon" />
      </div>
      <div id="sideBar-Text">
        <p>WEIGHT: {dataPok.weight}</p>
        <p>HEIGHT: {dataPok.height}</p>
      </div>
    </aside>
  );
}

export default SideBar;
