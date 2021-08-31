import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import SEO from "@bradgarropy/next-seo";
import GradientBG from "../components/decoration/GradientBG";

function MyApp({ Component, pageProps, router }) {
	return (
		<>
			<SEO
				title="Two Zero Nine Mastering | Professional Audio Mastering, Liverpool"
				description="Mastering solutions for musicians, labels and studio's around the world from our dedicated studio in Liverpool."
				keywords={[
					"Mastering, Mastering studio, Mastering services, Audio Mastering, Mixing and Mastering, Liverpool",
				]}
				icon="/favicon-32x32.png"
			/>
			<NavBar></NavBar>
			{router.route !== "/" && (
				<GradientBG
					color="green"
					height="h-800"
					flipped={true}
					opacity="opacity-60"
					translateY="-translate-y-2/4 top-0"
				></GradientBG>
			)}

			<AnimatePresence
				exitBeforeEnter
				initial={false}
				onExitComplete={() => window.scrollTo(0, 0)}
			>
				<Component {...pageProps} key={router.route} />
				{console.log(router.route)}
			</AnimatePresence>
			<Footer></Footer>
		</>
	);
}

export default MyApp;
