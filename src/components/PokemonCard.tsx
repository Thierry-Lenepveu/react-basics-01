
export interface Pokemon {
  name: string;
  imgSrc?: string;
}

export function PokemonCard(pokemon: Pokemon) {

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
