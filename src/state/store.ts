import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "@/state/pokemonSlice";

const store = configureStore({
	reducer: {
		pokemons: pokemonReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
