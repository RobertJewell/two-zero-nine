import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";
import PageTitle from "../components/PageTitle";
import GradientBG from "../components/decoration/GradientBG";

export default function faq() {
	return (
		<div className="overflow-hidden">
			<div className="relative">
				<NavBar></NavBar>

				<GradientBG
					color="green"
					height="h-800"
					flipped={true}
					opacity="opacity-60"
					translateY="-translate-y-2/4 top-0"
				></GradientBG>

				<PageTitle
					title="Frequently Asked Questions"
					classes="max-w-5xl px-4"
				></PageTitle>

				<FaqAccordion></FaqAccordion>

				<Footer></Footer>
			</div>
		</div>
	);
}
