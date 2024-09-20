import Link from "next/link";
import Image from 'next/image'
import { IoHeartOutline } from "react-icons/io5";
import { SimplePokemon } from "../interfaces/pokemons-response";

export const PokemonCard = ({ pokemon }: { pokemon: SimplePokemon }) => {
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">
          <Image className="h-24 w-24 text-white rounded-full mx-auto"
            width={150}
            height={150}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{pokemon.name}</p>
          <div className="mt-5">
            <Link 
              href={`pokemons/${pokemon.name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              Mas información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link href="/dashboard/name" className="px-4 py-2 hover:bg-gray-100 flex items-center justify-center  ">
            <div className="text-red-600">
              <IoHeartOutline/>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                No es favorito
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}