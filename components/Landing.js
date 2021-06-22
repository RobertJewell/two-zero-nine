import React from "react";
import Button from "./button";

export default function Landing() {
	return (
		<div className="container flex flex-col justify-center px-6 mx-auto text-white sm:items-center sm:px-0 ">
			<h1 className="pt-12 text-6xl font-bold text-white sm:text-center sm:text-8xl ">
				Your sound:
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
				></Button>
				<Button
					text="Services"
					type="secondary"
					width="w-36"
					margin="sm:mx-4"
					link="/"
					extras="hidden sm:block"
				></Button>
			</div>
		</div>
	);
}
