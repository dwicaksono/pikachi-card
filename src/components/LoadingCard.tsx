import React, { memo } from "react";
import { MdOutlineCatchingPokemon } from "react-icons/md";

const LoadingCard = () => {
	return (
		<div className="bg-glass w-full h-full py-4 flex items-center rounded-xl justify-center">
			<div className="w-56 bg-slate-700 h-56 animate-pulse rounded-full">
				<MdOutlineCatchingPokemon className="w-full h-full text-pikachu animate-spin" />
			</div>
		</div>
	);
};

export default memo(LoadingCard);
