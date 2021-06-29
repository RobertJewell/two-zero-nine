export default function ThreeStepPlanPoint({
	classes,
	number,
	title,
	children,
}) {
	return (
		<div className={`${classes}`}>
			<div className="flex flex-col sm:flex-row">
				<div className="flex items-center justify-center w-16 h-16 mr-8 bg-gray-800 rounded-full">
					<p className="text-2xl font-bold">{number}</p>
				</div>
				<div className="flex flex-col">
					<h3 className="mt-4 text-2xl font-bold">{title}</h3>
					{children}
				</div>
			</div>
		</div>
	);
}
