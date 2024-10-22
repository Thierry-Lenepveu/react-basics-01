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

function PokemonCard() {
    let pokemon = pokemonList[1];
    if (pokemon.imgSrc) {
        return <figure>
            <figcaption>{pokemon.name}</figcaption>
            <img src={pokemon.imgSrc} alt={pokemon.name}/>
        </figure>;
    }

    return <figure>
        <figcaption>{pokemon.name}</figcaption>
        <p>???</p>
    </figure>;
}

export default PokemonCard;