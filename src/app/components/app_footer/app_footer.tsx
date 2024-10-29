"use client";

import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { MdOutlineHourglassTop } from "react-icons/md";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";
import { cn } from "@/app/utils/cn";

const link_style =
	"border border-[#beb3c4] rounded-full text-white hover:bg-[#beb3c4] hover:text-[#170b1e] active:bg-[#beb3c4] active:text-[#170b1e]";

export function AppFooter() {
	const pathname = usePathname();
	const show_contact = pathname.slice(1) !== "contact-me";
	return (
		<footer className="bg-[#170b1e] flex flex-col pt-14 pb-20 items-center relative">
			{show_contact && (
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
			)}
			<Image
				src="/assets/MyLogo_White.png"
				alt="white-logo"
				width={100}
				height={100}
			/>
			<p className="text-white text-lg text-center">
				I'm open to exploring new opportunities, working together, and tackling
				exciting projects.
				<br /> Feel free to email me or connect with me on any social platforms
				if you want to chat!
			</p>
			<div className="flex flex-row gap-4 my-7">
				<Link
					href="https://www.linkedin.com/in/veena-dharshini-102060232/"
					className={link_style}
					target="_blank"
					rel="noopener noreferrer">
					<FaLinkedinIn
						size={30}
						className="m-2.5"
					/>
				</Link>
				<Link
					href="https://github.com/VeenaDharshini"
					className={link_style}
					target="_blank"
					rel="noopener noreferrer">
					<FaGithub
						size={30}
						className="m-2.5"
					/>
				</Link>
				<Link
					href="mailto:veena.dharshini.4321@gmail.com"
					className={link_style}
					target="_blank"
					rel="noopener noreferrer">
					<MdEmail
						size={30}
						className="m-2.5"
					/>
				</Link>
				<Link
					href="https://www.instagram.com/veena_dharshini/"
					className={link_style}
					target="_blank"
					rel="noopener noreferrer">
					<FaInstagram
						size={30}
						className="m-2.5"
					/>
				</Link>
			</div>
			<p className="text-white flex justify-center items-center text-xl">
				<FaRegCopyright className="mr-3" /> 2024 Veena Dharshini
			</p>
		</footer>
	);
}
