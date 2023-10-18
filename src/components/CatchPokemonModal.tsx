import React, { FC, useState, useEffect, useCallback } from "react";
import { BarStatus, LoadingState, ModalContainer } from ".";
import { useDispatch, useSelector } from "react-redux";
import {
	selectPokemons,
	setCloseModal,
	setLoading,
	setStopLoading,
} from "@/state/pokemonSlice";
import ModalPortal from "./ModalPortal";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import ConfettiExplosion from "react-confetti-explosion";
import { iconDetail } from "@/constants";

const CatchPokemonModal: FC<any> = () => {
	const dispatch = useDispatch();
	const { detail, isLoading } = useSelector(selectPokemons);
	const { isModal } = useSelector(selectPokemons);
	const [congrats, setCongrats] = useState({
		win: false,
		confetti: false,
		islose: false,
	});

	const catchPokemonHandler = async () => {
		dispatch(setLoading());
		const rollingCatch = await Math.round(Math.random());
		setTimeout(() => {
			if (rollingCatch === 1) {
				dispatch(setStopLoading());
				setCongrats((prev) => ({
					...prev,
					win: true,
					confetti: true,
					islose: false,
				}));
			} else {
				dispatch(setStopLoading());
				setCongrats((prev) => ({
					...prev,
					win: false,
					confetti: false,
					islose: true,
				}));
			}
		}, 1000);
	};

	const closeModalHandler = useCallback(() => {
		dispatch(setCloseModal());
		setCongrats((prev) => ({
			...prev,
			win: false,
			confetti: false,
			islose: false,
		}));
	}, [isModal]);

	const saveHandler = () => {
		closeModalHandler();
	};

	return (
		<ModalContainer close={closeModalHandler}>
			{congrats.confetti && (
				<ConfettiExplosion
					zIndex={99}
					duration={3500}
					particleCount={250}
					force={0.8}
					width={1600}
				/>
			)}
			<div className="mb-5 w-full flex flex-col justify-center items-center">
				<>
					{congrats.islose && <h2 className="font-bold">OOPS !!!</h2>}
					{!congrats.confetti && (
						<p className="text-xs">Catch me press the ball</p>
					)}
				</>
				{congrats.win && congrats.confetti && (
					<h2 className="font-bold">Congratulations !!!</h2>
				)}
			</div>
			<div className="flex flex-col justify-center items-center">
				{congrats.win ? (
					<div className="w-96 flex flex-row rounded-2xl overflow-hidden">
						<input
							className="flex-1 outline-none px-4 text-sm"
							placeholder="name"
							maxLength={20}
						/>
						<button
							className="px-4 py-1 text-sm font-semibold  backdrop-blur-lg bg-white/30 "
							onClick={saveHandler}>
							save
						</button>
					</div>
				) : (
					<div className="w-52 h-52 flex items-center">
						{isLoading ? (
							<MdOutlineCatchingPokemon className="w-52 h-52 text-slate-600 animate-spin " />
						) : (
							<img
								src="/ball.png"
								alt="pokemon-ball"
								className="w-full hover:animate-pulse cursor-pointer"
								onClick={catchPokemonHandler}
							/>
						)}
					</div>
				)}
				<div className="w-52 h-52  justify-center items-center ">
					<img
						src={detail.imageUrl}
						alt="image"
						className="h-full  animate-wiggle"
					/>
				</div>
				<div className="text-center mt-2 text-slate-700 animate-pulse text-2xl font-bold capitalize ">
					<p>{detail?.name}</p>
				</div>
				{congrats.confetti && (
					<div className="mt-5 flex flex-col gap-2 w-full">
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
				)}
			</div>
		</ModalContainer>
	);
};

export default CatchPokemonModal;
