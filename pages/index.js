import Head from "next/head";
import NavBar from "../components/NavBar";
import Landing from "../components/Landing";

export default function Home() {
	return (
		<div className="">
			<div className="relative">
				<div className="absolute w-full featureGradient h-96 -z-10"></div>
			</div>
			<NavBar></NavBar>
			<Landing></Landing>
		</div>
	);
}
