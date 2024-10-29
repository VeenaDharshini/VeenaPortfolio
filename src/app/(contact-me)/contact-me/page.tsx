"use client";

import { useState } from "react";
import { ContactForm } from "./contact-form";
import Image from "next/image";

export default function ContactMe() {
	const [form_success, set_form_success] = useState<boolean>(false);
	return (
		<main className="flex flex-col md:gap-8 row-start-2 items-center sm:items-start min-h-[50vh] px-7 mb-24">
			{form_success ? (
				<div className="flex flex-col m-auto items-center">
					<Image
						src="/assets/Thanks.png"
						alt="thanks"
						width={200}
						height={100}
						className="md:w-72"
					/>
					<h1 className="font-extrabold italic text-transparent text-3xl sm:text-4xl xl:text-5xl bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-transparent h-full">
						Thanks a latte !
					</h1>
					<p className="text-base md:text-xl mt-7 italic">
						Your message has been received, and we'll get back to you as soon as
						possible (usually within 24 hours). <br />
						If you have any immediate questions, feel free to reach out directly
						at any of the social platforms.
					</p>
				</div>
			) : (
				<ContactForm set_form_success={set_form_success} />
			)}
		</main>
	);
}
