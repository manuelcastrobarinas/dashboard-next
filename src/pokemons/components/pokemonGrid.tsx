
// import Image from "next/image";
import { PokemonCard } from "./pokemonCard";
import { SimplePokemon } from '@/pokemons';

export const PokemonGrid = ({ pokemons }: { pokemons: SimplePokemon[] }) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
    </div>
  )
}
