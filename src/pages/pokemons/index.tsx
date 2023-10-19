import { CardPokemonV2, LoadingCard, ModalContainer } from "@/components";
import Layout from "@/components/Layout";
import { fetchPokemons } from "@/hooks";
import { selectPokemons, setLoading, setOpenModal } from "@/state/pokemonSlice";
import { PokemonList } from "@/types";
import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineCatchingPokemon } from "react-icons/md";

export default function PokemonsPage() {
	const glassBoxRef = useRef<any>(null);
	const dispatch = useDispatch();
	const { pokemons, isLoading, hasMore } = useSelector(selectPokemons);

	useEffect(() => {
		dispatch(setLoading());
		dispatch(fetchPokemons(0));
	}, []);

	const handleScroll = useCallback(() => {
		const { scrollTop, scrollHeight, clientHeight } = glassBoxRef.current;
		const totalHeight = Math.round(scrollTop + clientHeight);
		if (totalHeight >= scrollHeight - 1 && hasMore) {
			const offset = pokemons?.length;
			dispatch(setLoading());
			dispatch(fetchPokemons(offset));
		}
	}, [pokemons]);

	useEffect(() => {
		if (glassBoxRef.current) {
			glassBoxRef.current.addEventListener("scroll", handleScroll);
		}
		return () => {
			if (glassBoxRef.current) {
				glassBoxRef.current.removeEventListener("scroll", handleScroll);
			}
		};
	}, [handleScroll]);
	return (
		<>
			<section
				ref={glassBoxRef}
				className="mt-4 bg-glass rounded-xl h-full drop-shadow-xl p-4 overflow-y-scroll scroll-smooth shadow-inner">
				<div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 h-fit ">
					{pokemons?.map((item: PokemonList) => (
						<CardPokemonV2 {...item} key={item.id} />
					))}
					{isLoading && hasMore && (
						<>
							<LoadingCard />
							<LoadingCard />
							<LoadingCard />
							<LoadingCard />
						</>
					)}
				</div>
			</section>
		</>
	);
}
