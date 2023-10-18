import Link from "next/link";
import React from "react";

const NavBar = () => {
	return (
		<div className="text-white items-center pr-4 border-b-yellow-600 border-b-2 flex justify-between drop-shadow-md">
			<Link href="/">
				<div className="lg:w-36 w-20 cursor-pointer">
					<img alt="logo" src="./logo.webp" />
				</div>
			</Link>
			<ul className="gap-10 hidden md:flex">
				<Link href="/pokemons">
					<li className="cursor-pointer hover:scale-95 transition-transform hover:animate-pulse ">
						Pokemons
					</li>
				</Link>
				<Link href="/games">
					<li className="cursor-pointer hover:scale-95 transition-transform  hover:animate-pulse">
						Games
					</li>
				</Link>
				<Link href="/my-list">
					<li className="cursor-pointer hover:scale-95 transition-transform  hover:animate-pulse">
						My List
					</li>
				</Link>
				<Link href="/pokemons">
					<li className="cursor-pointer hover:scale-95 transition-transform  hover:animate-pulse">
						About Me
					</li>
				</Link>
			</ul>
		</div>
	);
};

export default NavBar;
