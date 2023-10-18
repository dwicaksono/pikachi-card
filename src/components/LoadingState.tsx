import React, { memo } from "react";
import { MdOutlineCatchingPokemon } from "react-icons/md";

const LoadingState = () => {
	return (
		<div className="p-10">
			<MdOutlineCatchingPokemon className="w-52 h-52 text-slate-600 animate-spin" />
		</div>
	);
};

export default memo(LoadingState);
