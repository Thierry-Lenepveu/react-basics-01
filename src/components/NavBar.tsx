import { Pokemon } from './PokemonCard'

interface NavBarProps {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
  }

function NavBar({pokemonIndex, setPokemonIndex, pokemonList}: NavBarProps) {
    const handleClickNext = () => {
        setPokemonIndex(pokemonIndex + 1)
      };
      const handleClickPrev = () => {
        setPokemonIndex(pokemonIndex - 1)
      };

    return(
    <>
      <button type="button" onClick={handleClickPrev} disabled={pokemonIndex <= 0}>Précédent</button>
      <button type="button" onClick={handleClickNext} disabled={pokemonIndex >= pokemonList.length - 1}>Suivant</button>
    </>
    );
}

export default NavBar;