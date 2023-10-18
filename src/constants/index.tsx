import { TbBrandBumble } from "react-icons/tb";
import { GiAlliedStar, GiEggDefense, GiLightningBow } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { SiSpeedypage } from "react-icons/si";
import type { IconDetail } from "@/types";

export const iconDetail = (icon: string) => {
	const typeicon: IconDetail = {
		hp: <TbBrandBumble className="font-bold" />,
		attack: <GiLightningBow className="font-bold" />,
		defense: <GiEggDefense className="font-bold" />,
		"special-attack": <GiAlliedStar className="font-bold" />,
		"special-defense": <MdHealthAndSafety className="font-bold" />,
		speed: <SiSpeedypage className="font-bold" />,
	};
	return typeicon[icon];
};
