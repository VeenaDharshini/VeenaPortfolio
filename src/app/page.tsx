import Image from "next/image";

export default function Home() {
	return (
		<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mt-16 mb-28 max-w-7xl mx-auto">
			<h1 className="text-purple-950 text-5xl md:text-7xl font-semibold text-center w-full">
				Hi, I'm Veena
			</h1>
			<h2 className="text-purple-800 text-4xl md:text-6xl font-semibold text-center w-full">
				A Developer
			</h2>
			<h3 className="w-full text-center font-medium text-lg md:text-xl">
				Building seamless digital experiences with a perfect mix of code and
				creativity.
			</h3>
			<Image
				src="/assets/Skills.png"
				alt="Skills"
				width={500}
				height={100}
				className="mx-auto max-w-96 md:max-w-[640px]"
			/>
		</main>
	);
}
