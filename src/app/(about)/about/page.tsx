import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { TechStackCarousel } from "./_components/tech_stack_carousel";

export default function Work() {
	return (
		<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mb-28 max-w-7xl mx-auto">
			<div className="flex flex-col md:flex-row gap-7 items-center md:max-w-[640px] mx-auto px-7">
				<Image
					src="/assets/Veena.png"
					alt="My Img"
					width={250}
					height={100}
					className="mx-auto max-w-96 md:max-w-[640px] rounded-lg"
				/>
				<ul className="text-purple-950 font-semibold font-mono text-justify">
					<li className="grid grid-flow-col mb-3">
						<FaPlay className="m-2" />
						<span>
							Hey! I'm a passionate software engineer with two years of valuable
							experience in web development, particularly in the e-commerce
							sector.
						</span>
					</li>
					<li className="grid grid-flow-col mb-3">
						<FaPlay className="m-2" />
						Although I'm new to freelancing, I'm eager to leverage my expertise
						further.
					</li>
					<li className="grid grid-flow-col mb-3">
						<FaPlay className="m-2" />
						This space is where I share my thoughts, projects, and a glimpse
						into my journey.
					</li>
				</ul>
			</div>

			<TechStackCarousel />
		</main>
	);
}
