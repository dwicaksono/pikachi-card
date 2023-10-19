import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { PokemonList, Pokemons } from "@/types";
import { checkDataIfHasStored } from "@/helpers";

const initialState: any = {
	pokemons: [],
	isLoading: false,
	hasMore: false,
	isModal: false,
	detail: {},
	myList: [],
};

const pokemonsSlice = createSlice({
	name: "pokemons",
	initialState,
	reducers: {
		setLoading: (state) => ({ ...state, isLoading: true }),
		setStopLoading: (state) => ({ ...state, isLoading: false }),
		setHasMore: (state, action) => ({ ...state, hasMore: action.payload }),
		setPokemons: (state, action) => {
			const dataReplace = checkDataIfHasStored(state.pokemons, action.payload);
			return {
				...state,
				isLoading: false,
				pokemons: dataReplace,
			};
		},
		setMylist: (state, action) => {
			return {
				...state,
				myList: checkDataIfHasStored(state.myList, action.payload),
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
	setMylist,
} = pokemonsSlice.actions;
export const selectPokemons = (state: any) => state.pokemons;
export default pokemonsSlice.reducer;
