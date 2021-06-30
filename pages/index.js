import Head from "next/head";
import Vinyl from "../public/assets/images/Vinyl.svg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import BrandLogos from "../components/BrandLogos";
import AboutSection from "../components/AboutSection";
import ThreeStepPlan from "../components/ThreeStepPlan";
import Testamonial from "../components/Testamonial";

export default function Home() {
	return (
		<div className="overflow-hidden">
			<div className="relative">
				{/* Top Gradient */}
				<div className="absolute w-full featureGradient h-96 -z-10 sm:hidden"></div>
				{/* Top Vinyl */}
				<Vinyl className="absolute transform scale-150 rotate-90 w-600 md:w-800 translate-x-2/4 sm:-rotate-90 sm:-translate-x-2/4 -z-10 sm:-translate-y-2/4 stroke-8"></Vinyl>

				<NavBar></NavBar>

				<Landing></Landing>

				<div className="absolute w-full transform flip-x -z-10 middleGradient--green h-800 opacity-60"></div>

				<BrandLogos></BrandLogos>

				<AboutSection></AboutSection>

				<div className="absolute w-full transform -translate-y-60 -z-10 middleGradient--purple h-800 opacity-60"></div>
				<Vinyl className="absolute hidden w-full transform scale-75 rotate-90 opacity-50 translate-x-2/4 -z-10 sm:block stroke-8"></Vinyl>

				<ThreeStepPlan></ThreeStepPlan>

				<Testamonial></Testamonial>

				<Footer></Footer>
			</div>
		</div>
	);
}
