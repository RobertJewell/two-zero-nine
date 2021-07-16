import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

export default function faq() {
	return (
		<div className="overflow-hidden">
			<div className="relative">
				<NavBar></NavBar>

				<FaqAccordion></FaqAccordion>

				<Footer></Footer>
			</div>
		</div>
	);
}
