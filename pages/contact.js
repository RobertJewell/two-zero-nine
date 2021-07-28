import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import GradientBG from "../components/decoration/GradientBG";
import ContactForm from "../components/ContactForm";
import Vinyl from "../components/decoration/Vinyl";
import Map from "../components/Map";
import "mapbox-gl/dist/mapbox-gl.css";

export default function contact() {
	return (
		<div className="overflow-hidden">
			<div className="relative">
				<NavBar></NavBar>
				<Vinyl
					width="w-600 md:w-800"
					scale="scale-150 sm:scale-100"
					rotation="rotate-90"
					translationX="translate-x-3/4 sm:translate-x-2/4  right-0"
					translationY="sm:-translate-y-1/4 translate-y-1/4"
					other=""
				></Vinyl>

				<GradientBG
					color="green"
					height="h-800"
					flipped={true}
					opacity="opacity-60"
					translateY="-translate-y-2/4 top-0"
				></GradientBG>

				<PageTitle title="Get in touch" classes="max-w-5xl px-4"></PageTitle>

				<ContactForm></ContactForm>

				<GradientBG
					color="purple"
					height="h-800"
					flipped={false}
					opacity="opacity-60"
					translateY="-translate-y-2/4 "
				></GradientBG>

				<Map></Map>

				<Footer></Footer>
			</div>
		</div>
	);
}
