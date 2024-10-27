import { AppFooter } from "@/app/components/app_footer";
import { AppHeader } from "@/app/components/app_header";
import { ContactForm } from "./contact-form";

export default function ContactMe() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] min-h-screen px-20 py-8 gap-16 font-[family-name:var(--font-geist-sans)]">
			<AppHeader />
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h1 className="text-base md:text-2xl text-[#27066a] font-semibold text-center mx-auto my-7">
					Thanks for getting in touch!
					<br />
					I'm excited to hear about your ideas and how I can help.
				</h1>
				<ContactForm />
			</main>
			<AppFooter />
		</div>
	);
}
