export default function productSecondaryContainer({ children }) {
	return (
		<div className="flex flex-col justify-center w-full max-w-5xl px-4 mx-auto mt-20 lg:flex-row">
			{children}
		</div>
	);
}
