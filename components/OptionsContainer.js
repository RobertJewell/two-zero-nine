export default function OptionsContainer({ children, title, desciption }) {
	return (
		<div className="container flex flex-col px-8 mx-auto text-white mt-28">
			<div className="w-full max-w-4xl mx-auto">
				<h2 className="text-5xl font-bold">{title}</h2>
				<p className="my-4 leading-6 text-gray-300">{desciption}</p>

				<div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:gap-x-24">
					{children}
				</div>
			</div>
		</div>
	);
}
