export default function OptionsItem({ title, description }) {
	return (
		<div className="flex flex-col mt-12">
			<h3 className="text-2xl font-bold text-white">{title}</h3>
			<p className="mt-4 leading-6 text-gray-300">{description}</p>
		</div>
	);
}
