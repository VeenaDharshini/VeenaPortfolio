import { AppHeader } from "@/app/components/app_header";
import { AppFooter } from "@/app/components/app_footer";

export default function About() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] min-h-screen px-20 py-8 gap-16 font-[family-name:var(--font-geist-sans)]">
			<AppHeader />
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				About me
			</main>
			<AppFooter />
		</div>
	);
}
