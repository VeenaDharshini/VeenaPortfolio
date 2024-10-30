"use client";
import Link from "next/link";
import { MdOutlineHourglassTop } from "react-icons/md";
import { cn } from "@/app/utils/cn";
import styles from "./style.module.css";
import { usePathname } from "next/navigation";

export function LetsConnect() {
	const pathname = usePathname();
	const show_contact = pathname.slice(1) !== "contact-me";

	if (!show_contact) {
		return null;
	}

	return (
		<div className="absolute bg-custom-gradient top-0 transform p-5 -translate-y-1/2 min-w-52 md:min-w-[700px] md:py-7 rounded-3xl flex flex-col md:flex-row justify-center items-center gap-2.5 md:gap-10">
			<p className="text-white text-base md:text-xl">
				Inspired by ideas, driven by results!
			</p>
			<Link
				href="/contact-me"
				className={cn(
					"bg-[#084013] py-2 px-5 rounded-md text-white flex items-center gap-1.5",
					styles.contact_btn
				)}>
				<MdOutlineHourglassTop className={cn(styles.hour_glass)} />
				Lets connect...
			</Link>
		</div>
	);
}
