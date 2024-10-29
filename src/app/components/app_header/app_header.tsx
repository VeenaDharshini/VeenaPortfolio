import Image from "next/image";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TbUserSearch } from "react-icons/tb";
import { PiHandshakeFill } from "react-icons/pi";
import Link from "next/link";

export function AppHeader() {
	return (
		<header className="grid grid-cols-[max-content_1fr_max-content] items-center max-w-7xl mx-auto px-11 py-5 w-full">
			<Link href="/">
				<Image
					src="/assets/MyLogo.png"
					alt="my-logo"
					width={100}
					height={100}
					className="cursor-pointer w-20 md:w-28"
				/>
			</Link>

			<div />

			<div className="grid grid-flow-col gap-7">
				<Link
					href="/work"
					className="flex items-center gap-1 flex-col text-base md:text-xl font-semibold hover:text-">
					<VscWorkspaceTrusted size={20} />
					Work
				</Link>
				<Link
					href="/about"
					className="flex items-center gap-1 flex-col text-base md:text-xl font-semibold">
					<TbUserSearch size={20} />
					About
				</Link>
				<Link
					href="/contact-me"
					className="flex items-center gap-1 flex-col text-base md:text-xl font-semibold">
					<PiHandshakeFill size={20} />
					Say Hello
				</Link>
			</div>
		</header>
	);
}
