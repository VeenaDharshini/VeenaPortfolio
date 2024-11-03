"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent } from "@/app/ui/carousel";
import { SKILLS } from "@/app/constants/skills";
import { TechStackCard } from "./tech_stack_card";

export function TechStackCarousel() {
	return (
		<div className="mx-auto">
			<div className="flex flex-col gap-1 mb-5 whitespace-nowrap w-fit">
				<span className="w-24 h-1 bg-[#E41A6E] rounded-sm" />
				<h1 className="text-3xl font-semibold text-purple-950">
					Tech stacks I use
				</h1>
				<span className="w-24 h-1 bg-[#E41A6E] rounded-sm ml-auto" />
			</div>

			<Carousel
				opts={{ loop: true, align: "start" }}
				plugins={[
					Autoplay({
						delay: 700,
						stopOnInteraction: true,
						stopOnFocusIn: true,
					}),
				]}
				className="max-w-[212px] sm:max-w-[432px] md:max-w-[640px] lg:max-w-[882px] xl:max-w-[1084px] mx-auto">
				<CarouselContent className="-ml-1">
					{SKILLS.map((skill) => (
						<TechStackCard
							key={skill.id}
							skill={skill}
						/>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
}
