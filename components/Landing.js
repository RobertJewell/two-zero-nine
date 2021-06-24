import React from "react";
import Button from "./button";

export default function Landing() {
	return (
		<div className="container flex flex-col justify-center w-full mx-auto text-white h-96 sm:h-auto sm:items-center sm:px-0 ">
			<h1 className="pt-12 text-6xl font-bold text-white sm:text-6xl sm:text-center lg:text-8xl ">
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
