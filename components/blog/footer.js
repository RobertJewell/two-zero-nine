import Container from "./container";
import { EXAMPLE_PATH } from "../../lib/constants";

export default function Footer() {
	return (
		<footer className="text-white bg-dark">
			<Container>
				<div className="flex flex-col items-center py-8 lg:flex-row">
					{/* <h3 className="mb-10 text-4xl font-bold leading-tight tracking-tighter text-center lg:text-5xl lg:text-left lg:mb-0 lg:pr-4 lg:w-1/2">
						Get your music mastered by Graeme.
					</h3> */}
					<div className="flex flex-col items-center justify-center w-full lg:flex-row lg:justify-between">
						<a
							href="https://twitter.com/Twozeronineuk"
							className="mx-3 mb-6 font-bold lg:mb-0 hover:underline"
						>
							Follow me on twitter
						</a>
						<a
							href="https://twozeronine.co.uk"
							className="px-12 py-3 font-bold text-center text-white transition-colors duration-200 border-2 rounded-sm border-accent-1 hover:bg-gray-800 "
						>
							Get your music mastered by Graeme.
						</a>
					</div>
				</div>
			</Container>
		</footer>
	);
}
