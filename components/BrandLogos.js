import Neve from "../public/assets/images/logos/Neve.svg";
import Sky from "../public/assets/images/logos/Sky.svg";
import BBC from "../public/assets/images/logos/BBC.svg";
import Kerrang from "../public/assets/images/logos/kerrang.svg";
import RadioX from "../public/assets/images/logos/radioX.svg";
// import Showcase from "../public/assets/images/logos/Showcase.svg";

export default function BrandLogos() {
	return (
		<div className="flex flex-col items-center justify-center w-full mt-12 sm:flex-row">
			<div className="flex mt-12">
				<Neve className="w-32 h-16 mx-4"></Neve>
				<RadioX className="relative w-32 h-16 mx-4 top-1"></RadioX>
				{/* <Showcase className="w-32 h-16 mx-4"></Showcase> */}
			</div>
			<div className="flex mt-12">
				<Sky className="hidden w-32 h-16 mx-4 lg:block"></Sky>
				<Kerrang className="w-32 h-16 mx-4"></Kerrang>
				<BBC className="w-32 h-16 mx-4"></BBC>
			</div>
		</div>
	);
}
