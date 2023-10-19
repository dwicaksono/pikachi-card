import { CardPokemonV2 } from "@/components";
import Layout from "@/components/Layout";
import { selectPokemons } from "@/state/pokemonSlice";
import { PokemonList } from "@/types";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function MyListPage() {
	const { myList } = useSelector(selectPokemons);
	return myList?.length > 0 ? (
		<section className="mt-4 bg-glass rounded-xl h-full drop-shadow-xl p-4 overflow-y-scroll scroll-smooth shadow-inner">
			<div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 h-fit ">
				{myList?.map((item: PokemonList) => (
					<CardPokemonV2 {...item} key={item.id} />
				))}
			</div>
		</section>
	) : (
		<div className="mt-10 flex justify-center items-center">
			<EmptyState />
		</div>
	);
}

const EmptyState = () => {
	return (
		<Link href="/pokemons">
			<div className="text-white animate-bounce py-4 px-10 rounded-xl cursor-pointer drop-shadow-2xl bg-glass">
				<p className="drop-shadow-lg">
					No card, Please catch the pokemon first
				</p>
			</div>
		</Link>
	);
};
