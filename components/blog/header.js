import Link from "next/link";

export default function Header() {
	return (
		<div className="flex justify-between w-full mt-8 mb-20 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
			<h2>
				<Link href="/">
					<a className="hover:underline">TwoZeroNine Blog</a>
				</Link>
			</h2>
			<h2>
				<Link href="/">
					<a className="text-lg text-accent-1 hover:underline">Main Site</a>
				</Link>
			</h2>
		</div>
	);
}
