import Layout from "@/components/Layout";
import { getDetailPokemon } from "@/hooks";
import { selectPokemons, setOpenModal } from "@/state/pokemonSlice";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GiLightningBow } from "react-icons/gi";
import { TbBrandBumble } from "react-icons/tb";
import { BarStatus, CatchPokemonModal, ModalContainer } from "@/components";
import { iconDetail } from "@/constants";
import ConfettiExplosion from "react-confetti-explosion";
export default function DetailPage() {
	const dispatch = useDispatch();
	const { query } = useRouter();
	const { id } = query as { id: string };
	const { detail, isModal } = useSelector(selectPokemons);

	useEffect(() => {
		if (!!id) {
			dispatch(getDetailPokemon(id));
		}
	}, [id]);
	return (
		<>
			<section>
				<div className="flex flex-col lg:flex-row mt-10 gap-10 bg-glass rounded-lg">
					<div className="w-full flex flex-col p-10 ">
						<h2 className="capitalize font-bold text-2xl text-white drop-shadow-2xl">
							{detail?.name}
						</h2>
						<div className="flex text-xs font-semibold text-slate-600 drop-shadow-lg gap-4">
							<p>Height : {detail?.height}</p>
							<p>weight : {detail?.weight}</p>
						</div>
						<div className="mt-5 flex flex-col gap-2">
							{detail?.stats?.map(
								({ base_stat, name }: { base_stat: number; name: string }) => (
									<BarStatus
										key={name}
										icon={iconDetail(name)}
										stat={base_stat}
										title={name}
									/>
								)
							)}
						</div>
					</div>
					<div className="w-full lg:w-6/12 hover:animate-pulse flex justify-center items-center">
						<img
							alt="pokemon-image"
							src={detail?.imageUrl}
							className="hover:animate-bounce  w-full md:w-6/12 lg:w-fit"
						/>
					</div>
				</div>
				{!isModal && (
					<div className="w-full flex justify-center items-center">
						<div
							className="cursor-pointer  h-20 w-20 md:h-40 md:w-40"
							onClick={() => dispatch(setOpenModal())}>
							<img
								src="/ball.png"
								alt="pikachu"
								className="drop-shadow-2xl animate-bounce"
							/>
						</div>
					</div>
				)}
			</section>
			<CatchPokemonModal />
		</>
	);
}
