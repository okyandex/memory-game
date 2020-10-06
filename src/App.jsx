import shuffle from "lodash.shuffle";
import React, { useState, useEffect } from "react";
import "./App.css";
import { getRandomIntArray, getPluralString } from "./helpers";

const assoc = {
  one: "ход",
  few: "хода",
  many: "ходов",
};

const randomIdsArray = getRandomIntArray(6, 300);
const pokemons = randomIdsArray.reduce((acc, id) => {
  return [...acc, { id }];
}, []);
const doubledPokemons = shuffle([...pokemons, ...pokemons]);

function App() {
  const [opened, setOpened] = useState([]);
  const [matched, setMatched] = useState([]);
  const [won, setWon] = useState(false);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (opened.length === 2) setTimeout(() => setOpened([]), 700);
  }, [opened]);

  useEffect(() => {
    if (opened.length < 2) return;
    const firstPokemon = doubledPokemons[opened[0]];
    const secondPokemon = doubledPokemons[opened[1]];
    if (firstPokemon.id === secondPokemon.id)
      setMatched((prev) => [...prev, firstPokemon.id]);
  }, [opened]);

  useEffect(() => {
    if (pokemons.length === matched.length) setTimeout(() => setWon(true), 700);
  }, [matched]);

  const flipCard = (index) => {
    if (opened.includes(index)) return;
    setOpened((prev) => [...prev, index]);
    setMoves((prev) => prev + 1);
  };

  const playAgain = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="moves">
        {moves} {getPluralString(moves, assoc)}
      </div>
      <div className="cards">
        {doubledPokemons.map(({ id }, index) => {
          let isFlipped = false;
          if (opened.includes(index)) isFlipped = true;
          if (matched.includes(id)) isFlipped = true;
          return (
            <PokemonCard key={index} {...{ id, index, flipCard, isFlipped }} />
          );
        })}
      </div>
      <button className="play-again-button" onClick={playAgain}>
        Еще раз
      </button>
    </div>
  );
}

function PokemonCard({ id, index, flipCard, isFlipped }) {
  return (
    <div
      onClick={() => flipCard(index)}
      className={`card ${isFlipped ? "flipped" : ""}`}
    >
      <div className="inner">
        <div className="front">
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            alt="pokemon"
          />
        </div>
        <div className="back">?</div>
      </div>
    </div>
  );
}

export default App;
