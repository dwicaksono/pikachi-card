import React, { FC, PropsWithChildren } from "react";
import { NavBar } from ".";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main
			className={`bg-gradient-to-br relative from-pikachu to-orange-600 flex justify-center items-center ${poppins.className} h-full w-screen`}>
			<div className="h-full lg:h-screen w-screen rounded-3xl flex flex-col px-10 py-4">
				<NavBar />
				{children}
			</div>
		</main>
	);
};

export default Layout;
