import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import BrandLogos from "../components/BrandLogos";
import AboutSection from "../components/AboutSection";
import ThreeStepPlan from "../components/ThreeStepPlan";
import Testamonial from "../components/Testamonial";
import Vinyl from "../components/decoration/Vinyl";
import GradientBG from "../components/decoration/GradientBG";

export default function Home() {
	return (
		<div className="overflow-hidden">
			<div className="relative">
				<Vinyl
					width="w-600 md:w-800"
					scale="scale-150"
					rotation="rotate-90 sm:-rotate-90"
					translationX="translate-x-2/4  sm:-translate-x-2/4  "
					translationY="sm:-translate-y-2/4"
				></Vinyl>

				<NavBar></NavBar>

				<Landing></Landing>

				<GradientBG
					color="green"
					height="h-800"
					flipped={true}
					opacity="opacity-60"
					translateY="-translate-y-40"
				></GradientBG>

				<BrandLogos></BrandLogos>

				<AboutSection></AboutSection>

				<GradientBG
					color="purple"
					height="h-800"
					flipped={false}
					opacity="opacity-60"
					translateY="-translate-y-60"
				></GradientBG>

				<Vinyl
					width="w-800"
					scale="sm:scale-100 md:scale-125"
					rotation="rotate-90"
					translationX="translate-x-2/4 right-0"
					other="hidden sm:block opacity-50 "
				></Vinyl>

				<ThreeStepPlan></ThreeStepPlan>

				<Testamonial></Testamonial>

				<Footer></Footer>
			</div>
		</div>
	);
}
