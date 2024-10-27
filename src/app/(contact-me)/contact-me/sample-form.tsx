"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/app/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/app/ui/form";
import { Input } from "@/app/ui/input";
import { contact_me_schema, ContactMe } from "./contact-me-schema";
import { COUNTRIES_CODE } from "@/app/constants/country_code";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/app/ui/select";
import { Textarea } from "@/app/ui/textarea";

export function SampleForm() {
	const form = useForm<ContactMe>({
		resolver: zodResolver(contact_me_schema),
		defaultValues: {
			client_name: "",
			client_email: "",
			country_code: "",
			country_name: "",
			phone_number: "",
			subject: "",
			message: "",
		},
	});

	const { setValue } = form;

	const handleCountrySelect = (countryName: string) => {
		const selectedCountry = COUNTRIES_CODE.find(
			(country) => country.name === countryName
		);
		if (selectedCountry) {
			setValue("country_code", selectedCountry.code);
			setValue("country_name", selectedCountry.name);
		}
	};

	function onSubmit(values: ContactMe) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8">
				<FormField
					control={form.control}
					name="client_name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Your Name"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="client_email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="Your Email"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="country_name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Country</FormLabel>
							<Select
								onValueChange={(value) => {
									field.onChange(value);
									handleCountrySelect(value);
								}}>
								<SelectTrigger>
									<SelectValue placeholder="Country" />
								</SelectTrigger>
								<SelectContent>
									{COUNTRIES_CODE.map((country, index) => (
										<SelectItem
											key={`${country.code}_${index}`}
											value={country.name}>
											{country.name}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="flex flex-row gap-2 mt-2 items-end relative">
					<FormField
						control={form.control}
						name="country_code"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										{...field}
										readOnly
										className="w-16 !mt-6"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="phone_number"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="absolute left-0 mb-2">
									Phone Number
								</FormLabel>
								<FormControl>
									<Input
										placeholder="Your Phone Number"
										{...field}
										onChange={(e) => {
											const value = e.target.value;
											field.onChange(value.replace(/\D/g, ""));
										}}
										className="!mt-6"
									/>
								</FormControl>
								<FormMessage className="absolute left-0" />
							</FormItem>
						)}
					/>
				</div>

				<FormField
					control={form.control}
					name="subject"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Subject</FormLabel>
							<FormControl>
								<Input
									placeholder="Subject"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Type here...."
									maxLength={900}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
