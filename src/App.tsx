import { useState } from 'react';
import { PokemonCard } from './components/PokemonCard'
import NavBar from './components/NavBar'
import './App.css'

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setIndex] = useState(0);

  return (
    <>
      <div>
        <PokemonCard name={pokemonList[pokemonIndex].name} imgSrc={pokemonList[pokemonIndex].imgSrc} />
        <NavBar pokemonIndex={pokemonIndex} pokemonList={pokemonList} setPokemonIndex={setIndex}/>
      </div>
    </>
  )
}

export default App
