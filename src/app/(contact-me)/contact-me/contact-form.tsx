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
import {
	contact_me_schema,
	ContactMe,
	CountryInput,
} from "./contact-me-schema";
import { Textarea } from "@/app/ui/textarea";
import { cn } from "@/app/utils/cn";
import { useEffect, useState } from "react";
import { Spinner } from "@/app/ui/spinner";
import { Popover, PopoverTrigger, PopoverContent } from "@/app/ui/popover";
import {
	Command,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
} from "@/app/ui/command";
import { RiExpandUpDownLine } from "react-icons/ri";
import { fetchCountries } from "@/app/api/country-select/route";
import Image from "next/image";
import { Skeleton } from "@/app/ui/skeleton";

type Props = {
	set_form_success: (is_success: boolean) => void;
};

export function ContactForm({ set_form_success }: Props) {
	const [openPopover, setOpenPopover] = useState<boolean>(false);
	const [countries, setCountries] = useState<CountryInput[] | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		const getCountries = async () => {
			try {
				const data = await fetchCountries();
				setCountries(data);
			} catch (err) {
				setError(true);
			} finally {
				setLoading(false);
			}
		};
		getCountries();
	}, []);

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
		setValue,
		control,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = form;

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

	return (
		<>
			<h1 className="text-base md:text-2xl text-[#27066a] font-semibold text-center mx-auto my-7">
				Thanks for getting in touch!
				<br />
				I'm excited to hear about your ideas and how I can help.
			</h1>
			<Form {...form}>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-6 mx-auto w-full max-w-96 md:max-w-2xl">
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

					{loading ? (
						<div>
							<FormLabel>Country</FormLabel>
							<Skeleton className="bg-[#cfb8f8] w-60 h-10 !mt-auto" />
						</div>
					) : countries && countries.length > 0 ? (
						<FormField
							control={control}
							name="country_name"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>Country</FormLabel>
									<Popover
										open={openPopover}
										onOpenChange={setOpenPopover}>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant="outline"
													role="combobox"
													aria-expanded={openPopover}
													className={cn(
														"w-full justify-between border-[1px] border-input text-sm font-medium",
														!field.value
															? "text-muted-foreground"
															: "text-black"
													)}>
													{field.value
														? countries.find(
																(country) => country.name === field.value
														  )?.name
														: "Country"}
													<RiExpandUpDownLine className="ml-2 h-4 w-4 shrink-0 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent className="w-[200px] p-0">
											<Command>
												<CommandInput placeholder="Your country" />
												<CommandList>
													<CommandEmpty>No country found</CommandEmpty>
													<CommandGroup>
														{countries.map((country, index) => (
															<CommandItem
																value={country.name}
																key={`${country.code}_${index}`}
																onSelect={() => {
																	setValue("country_code", country.code);
																	setValue("country_name", country.name);
																}}
																className={cn(
																	"border border-b-slate-400 cursor-pointer",
																	{
																		"bg-[#d9b4fa]":
																			country.name === field.value,
																	}
																)}>
																<Image
																	src={country.flag_img}
																	alt={`${country.name}_${index}`}
																	width={30}
																	height={100}
																/>
																{country.name}
															</CommandItem>
														))}
													</CommandGroup>
												</CommandList>
											</Command>
										</PopoverContent>
									</Popover>
									<FormMessage />
								</FormItem>
							)}
						/>
					) : null}

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
								<FormItem className="flex-grow">
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
		</>
	);
}
