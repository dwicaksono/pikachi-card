import type { PokemonList } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import { AiFillLike, AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiChevronRightSquare } from "react-icons/bi";
import { MdOutlineCatchingPokemon } from "react-icons/md";

const CardPokemonV2 = ({ name, color, imageUrl, id }: PokemonList) => {
	const { push } = useRouter();
	const detailHandler = (id: string) => {
		push(`/pokemons/${id}`);
	};

	return (
		<div
			className="rounded-xl h-max flex  gap-1 overflow-hidden cursor-pointer drop-shadow-xl w-full"
			onClick={() => detailHandler(id)}>
			<div
				style={{ backgroundColor: color }}
				className="w-full flex flex-col justify-center ">
				<div className="w-full h-max overflow-hidden">
					<img
						src={imageUrl}
						alt="pokemon-pic"
						className="w-full h-full object-cover drop-shadow-md hover:animate-pulse"
					/>
				</div>

				<div className="p-3 capitalize font-semibold text-white drop-shadow-lg text-xl text-center">
					<h3>{name}</h3>
				</div>
			</div>
			<div className="w-10 bg-glass  flex flex-col items-center justify-between gap-4 py-4">
				<div className="flex gap-4 flex-col">
					<AiFillLike className="text-2xl text-slate-700 cursor-none hover:text-slate-500 transition-all duration-500" />
					<MdOutlineCatchingPokemon className="text-2xl text-slate-700 cursor-pointer hover:animate-spin hover:text-slate-500 transition-all duration-500" />
				</div>
				<BiChevronRightSquare
					className="text-2xl text-slate-700 cursor-pointer hover:text-slate-500 transition-all duration-500"
					onClick={() => detailHandler(id)}
				/>
			</div>
		</div>
	);
};

export default CardPokemonV2;
