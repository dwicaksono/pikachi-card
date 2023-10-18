export interface PokemonList {
	name: string;
	url: string;
	imageUrl: string;
	color: string;
	id: string;
}

export interface Pokemons {
	pokemons: PokemonList[];
	hasMore: boolean;
	isLoading: boolean;
}

export type IconDetail = {
	[key: string]: JSX.Element;
};
