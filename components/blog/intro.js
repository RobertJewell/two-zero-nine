import Link from "next/link";

export default function Intro() {
	return (
		<section className="flex flex-col items-center pt-16 mb-16 md:flex-row md:justify-between md:mb-12 md:pt-12">
			<h1 className="text-6xl font-bold leading-tight tracking-tighter md:text-6xl md:pr-8">
				TwoZeroNine Blog
			</h1>
			<h2 className="mt-10 text-2xl font-bold leading-tight tracking-tight md:mb-3 md:mt-0 md:text-4xl md:tracking-tighter">
				<Link href="https://twozeronine.co.uk">
					<a className="px-6 py-2 text-lg border-2 rounded-md text-accent-1 hover:bg-gray-800 border-accent-1">
						Main Site
					</a>
				</Link>
			</h2>
		</section>
	);
}
