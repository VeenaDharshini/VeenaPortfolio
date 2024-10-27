import { Button } from "@/app/ui/button";
import Image from "next/image";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TbUserSearch } from "react-icons/tb";
import { PiHandshakeFill } from "react-icons/pi";
import Link from "next/link";

export function AppHeader() {
	return (
		<header className="grid grid-cols-[max-content_1fr_max-content] items-center">
			<Link href="/">
				<Image
					src="/assets/MyLogo.png"
					alt="my-logo"
					width={120}
					height={120}
					className="cursor-pointer"
				/>
			</Link>

			<div />
			<div className="grid grid-flow-col gap-2">
				<Link href="/work">
					<Button variant="outline">
						<VscWorkspaceTrusted />
						Work
					</Button>
				</Link>
				<Link href="/about">
					<Button variant="outline">
						<TbUserSearch />
						About
					</Button>
				</Link>
				<Link href="/contact-me">
					<Button variant="outline">
						<PiHandshakeFill />
						Say Hello
					</Button>
				</Link>
			</div>
		</header>
	);
}
