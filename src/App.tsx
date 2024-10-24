import { useState } from 'react';
import PokemonCard from './components/PokemonCard'
import './App.css'

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
function App() {
  const [pokemonIndex, setIndex] = useState(0);
  const handleClickNext = () => {
    console.log("before next: " + pokemonIndex)
    setIndex(pokemonIndex + 1)
    console.log("after next: " + pokemonIndex)
  };
  const handleClickPrev = () => {
    console.log("before prev: " + pokemonIndex)
    setIndex(pokemonIndex - 1)
    console.log("after prev: " + pokemonIndex)
  };

  return (
    <>
      <div>
        <PokemonCard name={pokemonList[pokemonIndex].name} imgSrc={pokemonList[pokemonIndex].imgSrc} />
        <button type="button" onClick={handleClickPrev} disabled={pokemonIndex <= 0}>Précédent</button>
        <button type="button" onClick={handleClickNext} disabled={pokemonIndex >= pokemonList.length - 1}>Suivant</button>
      </div>
    </>
  )
}

export default App
