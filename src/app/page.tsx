import Image from "next/image";
import { AppFooter } from "./components/app_footer";
import { AppHeader } from "./components/app_header";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] min-h-screen px-20 py-8 gap-16 font-[family-name:var(--font-geist-sans)]">
			<AppHeader />
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mt-16">
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
					height={1000}
					className="mx-auto"
				/>
			</main>
			<AppFooter />
		</div>
	);
}
