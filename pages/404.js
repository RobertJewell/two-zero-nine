import Button from "../components/Button";

export default function Custom404() {
	return (
		<div className="pt-20 overflow-hidden">
			<div className="relative grid py-16 text-center place-content-center">
				<h1 className="mb-2 font-bold text-accent-main">404 ERROR</h1>
				<p className="mb-2 text-4xl font-bold text-white">Huh, weird.</p>
				<p className="mb-8 text-white">
					It looks like this page doesn't exist.
				</p>
				<Button
					text="Take me home"
					type="primary"
					width="w-40"
					margin="mx-auto"
					link="/"
					extras=""
				></Button>
			</div>
		</div>
	);
}
