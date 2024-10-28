import { ContactForm } from "./contact-form";

export default function ContactMe() {
	return (
		<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
			<h1 className="text-base md:text-2xl text-[#27066a] font-semibold text-center mx-auto my-7">
				Thanks for getting in touch!
				<br />
				I'm excited to hear about your ideas and how I can help.
			</h1>
			<ContactForm />
		</main>
	);
}
