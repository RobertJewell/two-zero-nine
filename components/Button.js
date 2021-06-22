import React from "react";
import Link from "next/link";

export default function Button({ type, link, text, width, margin, extras }) {
	const buttonType = {
		primary:
			"p-2 text-center align-middle transition-colors bg-white border-2 border-white text-gray-900 rounded-lg hover:bg-gray-200 hover:border-gray-200",
		secondary:
			"p-2 text-center align-middle transition-colors border-2 border-gray-200 rounded-lg hover:bg-gray-800",
	};

	const classNames = `${width} ${buttonType[type]} `;
	return (
		<div className={`${margin} ${extras} flex flex-row justify-between`}>
			<Link href={link}>
				<a className={classNames}>{text}</a>
			</Link>
		</div>
	);
}
