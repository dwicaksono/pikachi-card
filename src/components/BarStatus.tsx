import React, { FC, ReactComponentElement, ReactNode, memo } from "react";
import { GiLightningBow } from "react-icons/gi";

const BarStatus: FC<detail> = ({ title, stat, icon }) => {
	const editTitle = title.split("-").join(" ");

	return (
		<div className="bg-glass relative w-full overflow-hidden rounded-md drop-shadow-md ">
			<p
				className={`text-xs text-white absolute right-2 z-10 top-1 ${
					stat >= 100 && "animate-bounce"
				}`}>
				{stat} / 100
			</p>
			<div
				style={{ width: `${stat}%` || "5%" }}
				className={`${typeOfColor[editTitle]} flex items-center w-[0%] rounded-md drop-shadow-md transition-all ease-out duration-[.5s] delay-300 gap-2 text-xs text-white px-2 py-1`}>
				{icon}
				<p className="lowercase">{editTitle}</p>
			</div>
		</div>
	);
};

export default memo(BarStatus);

interface detail {
	title: string;
	stat: number;
	icon?: ReactNode;
}

const typeOfColor: color = {
	hp: "bg-green-600",
	attack: "bg-blue-600",
	defense: "bg-purple-600",
	"special attack": "bg-lime-600",
	"special defense": "bg-cyan-400",
	speed: "bg-rose-500",
};

type color = {
	[key: string]: string;
};
