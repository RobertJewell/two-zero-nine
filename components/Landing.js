import Button from "./Button";

export default function Landing() {
	return (
		<div className="container flex flex-col justify-center w-full px-4 mx-auto text-white min-h-96 h-screen-60 sm:min-h-400 sm:h-screen-60 max-h-700 sm:items-center sm:px-0 ">
			<h1 className="pt-12 text-6xl font-bold text-white sm:text-center sm:text-8xl ">
				Your <br className="sm:hidden" /> sound:
				<br />
				<span className="text-accent-main">Perfected.</span>
			</h1>
			<h3 className="pt-4 sm:text-center">
				Audio mastering in the heart of Liverpool.
			</h3>
			<div className="flex items-center pt-16 sm:justify-center">
				<Button
					text="Get started"
					type="primary"
					width="w-36"
					margin="sm:mx-4"
					link="/"
					extras=""
				></Button>
				<Button
					text="Services"
					type="secondary"
					width="w-36"
					margin="sm:mx-4"
					link="/"
					extras="hidden sm:flex"
				></Button>
			</div>
		</div>
	);
}
