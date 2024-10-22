
interface PokemonProp {
  name: string;
  imgSrc?: string;
}

function PokemonCard(pokemon: PokemonProp) {

    return (
        <figure>
            <figcaption>{pokemon.name}</figcaption>
            {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name}/> : <p>???</p>}
        </figure>
    );
}

export default PokemonCard;