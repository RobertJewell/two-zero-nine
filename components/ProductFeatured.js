import Button from "./Button";
import Vinyl from "../components/decoration/Vinyl";

export default function ProductFeatured({ title, description }) {
	return (
		<div className="container flex flex-col items-start w-full px-4 mx-auto mt-20 text-white">
			<div className="relative w-full max-w-4xl px-8 py-10 mx-auto overflow-hidden border-4 sm:px-12 rounded-xl border-accent-muted">
				<Vinyl
					width="w-full"
					scale="sm:scale-100 scale-75"
					translationX="translate-x-2/4 sm:-translate-y-2/4 sm:top-0 translate-y-2/4 bottom-0 right-0"
					other="text-accent-muted stroke-current stroke-12 sm:stroke-6"
				></Vinyl>
				<div className="sm:w-1/2">
					<h2 className="w-1/2 text-4xl font-bold sm:text-5xl">{title}</h2>
					<p className="w-3/4 mt-6 leading-6">{description}</p>
				</div>
				<div className="flex flex-col sm:flex-row">
					<Button
						text="Get started"
						type="primary"
						width="w-40"
						link="/contact"
						margin="mt-8"
					></Button>
					<Button
						text="Apple mastering"
						type="secondary"
						width="w-40"
						link="#apple_digital-masters"
						margin="mt-4 sm:ml-8 sm:mt-8"
					></Button>
				</div>
			</div>
		</div>
	);
}
