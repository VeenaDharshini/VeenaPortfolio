import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import Image from "next/image";
import { LetsConnect } from "./lets_connect";

const link_style =
	"border border-[#beb3c4] rounded-full text-white hover:bg-[#beb3c4] hover:text-[#170b1e] active:bg-[#beb3c4] active:text-[#170b1e]";

export function AppFooter() {
	return (
		<footer className="bg-[#170b1e] flex flex-col pt-14 pb-20 items-center relative">
			<LetsConnect />
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
					href={`https://www.linkedin.com/in/${process.env.LINKEDIN}`}
					className={link_style}
					target="_blank"
					rel="noopener noreferrer">
					<FaLinkedinIn
						size={30}
						className="m-2.5"
					/>
				</Link>
				<Link
					href={`https://github.com/${process.env.GIT_HUB}`}
					className={link_style}
					target="_blank"
					rel="noopener noreferrer">
					<FaGithub
						size={30}
						className="m-2.5"
					/>
				</Link>
				<Link
					href={`mailto:${process.env.SMTP_USER}`}
					className={link_style}
					target="_blank"
					rel="noopener noreferrer">
					<MdEmail
						size={30}
						className="m-2.5"
					/>
				</Link>
				<Link
					href={`https://www.instagram.com/${process.env.INSTAGRAM}`}
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
			<p className="text-[#cfbad1] text-xs">Handcrafted by me</p>
		</footer>
	);
}
