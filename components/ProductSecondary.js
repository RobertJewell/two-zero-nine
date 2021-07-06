import Button from "./Button";

export default function ProductSecondary({
	title,
	description,
	children,
	classes,
}) {
	return (
		<div className="container flex flex-col items-start w-full px-4 mx-auto text-white">
			<div
				className={`relative w-full px-8 py-10 mx-auto bg-gray-800 max-w-400 min-h-300 sm:px-12 rounded-xl ${classes}`}
			>
				<h2 className="text-2xl font-bold ">{title}</h2>
				<p className="mt-6 leading-6">{description}</p>
				{children}
				<Button
					text="Get started"
					type="secondary"
					width="w-36"
					link="/"
					margin="mt-8"
				></Button>
			</div>
		</div>
	);
}