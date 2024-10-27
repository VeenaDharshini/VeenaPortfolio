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
import { cn } from "@/app/utils/cn";
import { useState } from "react";
import { Spinner } from "@/app/ui/spinner";

export function ContactForm() {
	const [form_success, set_form_success] = useState<boolean>(false);
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

	const {
		getValues,
		setValue,
		control,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = form;

	const handleCountrySelect = (countryName: string) => {
		const selectedCountry = COUNTRIES_CODE.find(
			(country) => country.name === countryName
		);
		if (selectedCountry) {
			setValue("country_code", selectedCountry.code);
			setValue("country_name", selectedCountry.name);
		}
	};

	const onSubmit = async (formData: ContactMe) => {
		const res = await fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		if (res.ok) {
			set_form_success(true);
			reset();
		} else {
			alert("Something went wrong.");
		}
	};

	if (form_success) {
		return <div>Form Success</div>;
	}

	return (
		<Form {...form}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-6 mx-auto">
				<FormField
					control={control}
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
					control={control}
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
					control={control}
					name="country_name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Country</FormLabel>
							<Select
								onValueChange={(value) => {
									field.onChange(value);
									handleCountrySelect(value);
								}}>
								<SelectTrigger
									className={getValues("country_name") ? "text-black" : ""}>
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

				<div
					className={cn(
						"flex flex-row gap-2 relative items-end",
						errors.phone_number ? "!mb-12" : ""
					)}>
					<FormField
						control={control}
						name="country_code"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										{...field}
										readOnly
										className={cn(
											"w-16",
											errors.phone_number
												? "items-center !mt-6 !md:mt-[-68px]"
												: "!mt-[26px] !md:mt-6"
										)}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={control}
						name="phone_number"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="absolute left-0 top-0 md:top-1">
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
										className={cn(errors.phone_number ? "md:!mt-8" : "")}
									/>
								</FormControl>
								<FormMessage className="absolute left-0" />
							</FormItem>
						)}
					/>
				</div>

				<FormField
					control={control}
					name="subject"
					render={({ field }) => (
						<FormItem className="col-span-2">
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
					control={control}
					name="message"
					render={({ field }) => (
						<FormItem className="col-span-2">
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Type here...."
									maxLength={900}
									{...field}
									className="h-36"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="col-span-2 flex justify-center">
					<Button
						type="submit"
						className="px-24 py-6">
						{isSubmitting ? <Spinner /> : null}
						Submit
					</Button>
				</div>
			</form>
		</Form>
	);
}
