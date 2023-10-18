import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { PokemonList, Pokemons } from "@/types";

const initialState: any = {
	pokemons: [],
	isLoading: false,
	hasMore: false,
	isModal: false,
	detail: {},
};

const pokemonsSlice = createSlice({
	name: "pokemons",
	initialState,
	reducers: {
		setLoading: (state) => ({ ...state, isLoading: true }),
		setStopLoading: (state) => ({ ...state, isLoading: false }),
		setHasMore: (state, action) => ({ ...state, hasMore: action.payload }),
		setPokemons: (state, action) => {
			const dataReplace = [...state.pokemons, ...action.payload].reduce(
				(accumulator, current) => {
					const index = accumulator.findIndex(
						(item: any) => item.id === current.id
					);
					if (index === -1) {
						// If the item doesn't exist in the accumulator array, add it.
						accumulator.push(current);
					} else {
						// If the item exists in the accumulator array, replace it with the updated item.
						accumulator[index] = current;
					}
					return accumulator;
				},
				[]
			);
			return {
				...state,
				isLoading: false,
				pokemons: dataReplace,
			};
		},
		setDetail: (state, action) => {
			return {
				...state,
				isLoading: false,
				detail: action.payload,
			};
		},
		setOpenModal: (state) => {
			return {
				...state,
				isModal: true,
			};
		},
		setCloseModal: (state) => {
			return {
				...state,
				isModal: false,
			};
		},
	},
});

export const {
	setPokemons,
	setLoading,
	setHasMore,
	setDetail,
	setOpenModal,
	setCloseModal,
	setStopLoading,
} = pokemonsSlice.actions;
export const selectPokemons = (state: any) => state.pokemons;
export default pokemonsSlice.reducer;
