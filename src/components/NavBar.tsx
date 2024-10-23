import { Pokemon } from './PokemonCard'

interface NavBarProps {
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
  }

function NavBar({setPokemonIndex, pokemonList}: NavBarProps) {
    return(
    <>
      {
        pokemonList.map((pokemon, index) => (
          <button key={pokemon.name}
            type='button'
            onClick={
              () => {
                setPokemonIndex(index)
                if (pokemon.name === 'pikachu') {
                  alert("pika pikachu !!!")
                }
              }
            }>{pokemon.name}</button>
        ))
      }
    </>
    );
}

export default NavBar;