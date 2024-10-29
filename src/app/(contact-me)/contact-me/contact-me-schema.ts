import { z } from "zod";

export const contact_me_schema = z.object({
	client_name: z
		.string()
		.trim()
		.min(1, {
			message: "Required",
		})
		.min(3, {
			message: "Name must be at least 2 characters.",
		}),
	client_email: z
		.string({ message: "Email is required" })
		.email({ message: "Please enter a valid email address." }),
	country_code: z.string(),
	country_name: z.string().min(1, { message: "Please select your country" }),
	phone_number: z
		.string({ message: "Phone number is required" })
		.regex(/^\d+$/, {
			message: "Enter valid phone number",
		}),
	subject: z
		.string()
		.min(1, { message: "Please provide your requirement" })
		.min(3, {
			message: "Name must be at least 3 characters.",
		}),
	message: z.string().optional(),
});

export type ContactMe = z.infer<typeof contact_me_schema>;

export const country_input_schema = z.object({
	name: z.string(),
	code: z.string(),
	flag_img: z.string(),
});

export type CountryInput = z.infer<typeof country_input_schema>;
