import { AppFooter } from "@/app/components/app_footer";
import { AppHeader } from "@/app/components/app_header";
import { ContactForm } from "./contact-form";
import { SampleForm } from "./sample-form";

export default function ContactMe() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<AppHeader />
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h1>
					Thanks for getting in touch! I'm excited to hear about your ideas and
					how I can help.
				</h1>
				{/* <ContactForm /> */}
				<SampleForm />
			</main>
			<AppFooter />
		</div>
	);
}
