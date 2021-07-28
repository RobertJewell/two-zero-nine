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
					scale="scale-150"
					rotation="rotate-90"
					translationX="translate-x-2/4 right-0"
					translationY="-translate-y-1/4"
					other="hidden sm:block"
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

				<Map></Map>

				<Footer></Footer>
			</div>
		</div>
	);
}
