import { AppHeader } from "@/app/components/app_header";
import { AppFooter } from "@/app/components/app_footer";

export default function Work() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<AppHeader />
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				my works
			</main>
			<AppFooter />
		</div>
	);
}
