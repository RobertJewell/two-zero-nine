import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function services() {
	return (
		<div className="overflow-hidden">
			<div className="relative">
				<NavBar></NavBar>

				<Footer></Footer>
			</div>
		</div>
	);
}
