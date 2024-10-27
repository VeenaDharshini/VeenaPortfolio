import { Button } from "@/app/ui/button";
import Image from "next/image";

export function AppHeader() {
	return (
		<header className="grid grid-cols-[max-content_1fr_max-content] items-center">
			<Image
				src="/assets/MyLogo.png"
				alt="my-logo"
				width={120}
				height={120}
			/>
			<div className="grid grid-cols-[max-content_max-content] justify-center gap-2">
				<Button variant="outline">Work</Button>
				<Button>About</Button>
			</div>
			<Button variant="secondary">Say Hello</Button>
		</header>
	);
}
