import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";


const getPokemons = async (limit: number = 20, offset: number = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());

  const pokemonsList: SimplePokemon[] = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }));
  return pokemonsList;
}

export default async function PokemonsPage() {
  const pokemons: SimplePokemon[] = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de pokemones <small>estatico</small></span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}