import React from "react";
import Neve from "../public/assets/images/logos/Neve.svg";
import Showcase from "../public/assets/images/logos/Showcase.svg";
import Sky from "../public/assets/images/logos/Sky.svg";
import BBC from "../public/assets/images/logos/BBC.svg";

export default function BrandLogos() {
	return (
		<div className="flex flex-col items-center justify-center w-full mt-12 sm:flex-row">
			<div className="flex mt-12">
				<Neve className="w-32 h-16 mx-4"></Neve>
				<Showcase className="w-32 h-16 mx-4"></Showcase>
			</div>
			<div className="flex mt-12">
				<Sky className="w-32 h-16 mx-4"></Sky>
				<BBC className="w-32 h-16 mx-4"></BBC>
			</div>
		</div>
	);
}
