export default function OptionsContainer({ children, title, desciption }) {
	return (
		<div className="container flex flex-col px-8 mx-auto text-white mt-28">
			<div className="w-full max-w-4xl mx-auto">
				<h2 className="text-5xl font-bold text-accent-muted">{title}</h2>
				<p className="my-4 leading-6 text-gray-300">
					Looking for something else?
					<br />
					We offer a host of other audio services:
				</p>

				<div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:gap-x-24">
					{children}
				</div>
			</div>
		</div>
	);
}
