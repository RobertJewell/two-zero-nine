export default function PageTitle({ title, classes }) {
	return (
		<div className="container w-full mx-auto mt-12 ">
			<h1 className={`text-5xl font-bold text-white mx-auto ${classes}`}>
				{title}
			</h1>
		</div>
	);
}
