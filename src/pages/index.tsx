import Layout from "@/components/Layout";

export default function Home() {
	return (
		<section className="relative flex z-10 justify-center items-center h-full group transition-all delay-300  md:overflow-x-hidden">
			<div className="absolute z-10  w-screen bottom-24 md:bottom-0 md:w-10/12 lg:w-8/12 xl:w-6/12 lg:bottom-0 lg:right-0 md:right-0">
				<img
					src="./pikachu.png"
					alt="pikachu"
					className="drop-shadow-2xl group-hover:animate-bounce w-full"
				/>
			</div>
			<h1 className="absolute top-24 lg:top-32 2xl:top-16 font-bold text-white text-[5rem] md:text-[10rem] xl:text-[15rem] 2xl:text-[20rem] left-0 drop-shadow-lg leading-none cursor-none">
				Hello
			</h1>
			<p className="font-bold peer text-white  leading-none z-10 top-[10rem] md:top-[15rem] lg:top-[17rem] xl:top-[21rem] left-0 text-[3rem] md:text-[8rem] lg:text-[12rem] xl:text-[18rem] absolute drop-shadow-xl cursor-pointer">
				Pikachu
			</p>
		</section>
	);
}
