import React from "react";

const CardPokemon = () => {
	const bgImage =
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png";
	return (
		<div className="group relative rounded-2xl bg-green-900 cursor-pointer items-start justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
			<div className="h-96 w-73">
				<img
					className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
					src={bgImage}
					alt="pokemon-image"
				/>
			</div>
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/90 " />
			<div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
				<h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1>
				<input
					type="range"
					className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 color-green-900"
				/>

				<button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
					See More
				</button>
			</div>
		</div>
	);
};

export default CardPokemon;
