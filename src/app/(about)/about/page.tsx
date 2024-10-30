import Image from "next/image";
import { TechStackCarousel } from "./_components/tech_stack_carousel";

export default function Work() {
	return (
		<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mb-28 max-w-7xl mx-auto">
			<Image
				src="/assets/Skills.png"
				alt="Skills"
				width={500}
				height={100}
				className="mx-auto max-w-96 md:max-w-[640px]"
			/>
			<p>
				Hey! I'm a passionate software engineer with two years of valuable
				experience in web development, particularly in the e-commerce sector.
				Although I'm new to freelancing, I'm eager to leverage my expertise
				further. This space is where I share my thoughts, projects, and a
				glimpse into my journey.
			</p>
			<h1>Tech stacks I use</h1>
			<TechStackCarousel />
		</main>
	);
}
