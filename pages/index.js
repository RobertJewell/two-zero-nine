import Head from "next/head";
import Vinyl from "../public/assets/images/vinyl.svg";
import NavBar from "../components/NavBar";
import Landing from "../components/Landing";
import BrandLogos from "../components/BrandLogos";
import MobileDropdown from "../components/MobileDropdown";

export default function Home() {
	return (
		<div className="relative overflow-hidden">
			{/* Decoration */}
			{/* Top Gradient */}
			<div className="relative">
				<div className="absolute w-full featureGradient h-96 -z-10"></div>
			</div>
			{/* Top Vinyl */}
			<div className="relative">
				<Vinyl className="absolute transform scale-150 rotate-90 w-600 md:w-800 translate-x-2/4 sm:-rotate-90 sm:-translate-x-2/4 -z-10 sm:-translate-y-2/4 stroke-8"></Vinyl>
			</div>

			{/* Content */}
			<div className="mx-4">
				<NavBar></NavBar>
				<Landing></Landing>
				<BrandLogos></BrandLogos>
			</div>
		</div>
	);
}
