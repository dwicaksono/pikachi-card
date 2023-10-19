import { calculateAverageColor } from "@/helpers";
import { fetch } from "@/lib/axios";
import {
	setDetail,
	setHasMore,
	setLoading,
	setPokemons,
} from "@/state/pokemonSlice";
import { PokemonList, Pokemons } from "@/types";
import { useState } from "react";
import { AnyAction, Dispatch } from "redux";

export const fetchPokemons = (offset: number): any => {
	return async (dispatch: Dispatch<AnyAction>) => {
		try {
			const limit = 20;
			const response = await fetch.get("/pokemon", {
				params: { limit, offset },
			});
			dispatch(setHasMore({ hasMore: !!response.data.next }));
			const dataSpecies = await Promise.all(
				response?.data.results?.map(async (result: any) => {
					const imageGetId = result.url?.split("/");
					const id: any = imageGetId[imageGetId.length - 2];
					const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
					const color = await calculateAverageColor(imageUrl);
					return {
						...result,
						imageUrl,
						color,
						id,
					};
				})
			);
			dispatch(setPokemons(dataSpecies));
		} catch (error) {
			console.error({ error });
		}
	};
};

export const getDetailPokemon = (id: string): any => {
	return async (dispatch: Dispatch<AnyAction>) => {
		dispatch(setLoading());
		try {
			const { data } = await fetch.get(`/pokemon/${id}`);
			const stats = data?.stats.map((item: any) => ({
				base_stat: item.base_stat,
				name: item.stat.name,
			}));

			const payload = {
				name: data?.name,
				height: data?.height,
				weight: data?.weight,
				type: data?.types[0].type.name,
				imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
				stats,
				id,
			};
			dispatch(setDetail(payload));
		} catch (error) {
			console.error({ error });
		}
	};
};
