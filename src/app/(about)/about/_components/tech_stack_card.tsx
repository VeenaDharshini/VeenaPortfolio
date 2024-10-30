import { CarouselItem } from "@/app/ui/carousel";
import { Card } from "@/app/ui/card";
import Image from "next/image";

type Props = {
	skill: {
		label: string;
		img: string;
	};
};

export function TechStackCard({ skill: { label, img } }: Props) {
	return (
		<CarouselItem className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
			<Card className="w-52 h-60 bg-white m-1 grid grid-rows-[2fr_1fr] justify-center gap-4">
				<Image
					src={`/assets/${img}.png`}
					alt={label}
					width={100}
					height={100}
					className="mt-auto"
				/>
				<span className="text-lg font-semibold text-center mb-auto">
					{label}
				</span>
			</Card>
		</CarouselItem>
	);
}
