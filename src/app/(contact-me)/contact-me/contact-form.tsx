"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
	name: string;
	country: string;
	phone: string;
	description: string;
}

export function ContactForm() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		country: "",
		phone: "",
		description: "",
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		// e.preventDefault();
		// const res = await fetch("/api/contact", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify(formData),
		// });

		// if (res.ok) {
		// 	alert("Message sent!");
		// 	setFormData({ name: "", country: "", phone: "", description: "" });
		// } else {
		// 	alert("Something went wrong.");
		// }
		console.log("FORM DATA: ", JSON.stringify(formData));
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="name"
				placeholder="Name"
				value={formData.name}
				onChange={handleChange}
				required
			/>
			<input
				type="text"
				name="country"
				placeholder="Country"
				value={formData.country}
				onChange={handleChange}
				required
			/>
			<input
				type="tel"
				name="phone"
				placeholder="Phone Number"
				value={formData.phone}
				onChange={handleChange}
				required
			/>
			<textarea
				name="description"
				placeholder="Description"
				value={formData.description}
				onChange={handleChange}
				required
			/>
			<button type="submit">Send</button>
		</form>
	);
}
