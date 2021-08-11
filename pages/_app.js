import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import GradientBG from "../components/decoration/GradientBG";

function MyApp({ Component, pageProps, router }) {
	return (
		<>
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
