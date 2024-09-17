export interface PokemonsResponseList {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface SimplePokemon {
  id  : string;
  name: string;
}