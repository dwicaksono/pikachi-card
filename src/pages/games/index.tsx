import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

export default function GamePage() {
	return (
		<div className="mt-10 flex justify-center items-center">
			<Link href="/my-list">
				<div className="text-white animate-bounce py-4 px-10 rounded-xl cursor-pointer drop-shadow-2xl bg-glass">
					<p className="drop-shadow-lg">
						No card, Please pick the card from you list
					</p>
				</div>
			</Link>
		</div>
	);
}
