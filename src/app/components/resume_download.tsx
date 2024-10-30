"use client";

import { ReactNode } from "react";
import { cn } from "../utils/cn";

type Props = {
	children: ReactNode;
	className?: string;
};

export function ResumeDownload({ children, className }: Props) {
	const handleDownload = () => {
		const pdfUrl = "/assets/Resume.pdf";
		window.open(pdfUrl, "_blank");
	};
	return (
		<div
			className={cn("cursor-pointer", className)}
			onClick={handleDownload}>
			{children}
		</div>
	);
}
