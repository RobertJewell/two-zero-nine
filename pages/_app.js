import "../styles/globals.css";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import GradientBG from "../components/decoration/GradientBG";

function MyApp({ Component, pageProps, router }) {
	return (
		<>
			<Head>
				<title>
					Two Zero Nine Mastering | Professional Audio Mastering, Liverpool
				</title>
				<meta
					name="description"
					content="Mastering solutions for musicians, labels and studios around the world from our dedicated studio in Liverpool."
				/>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/assets/meta/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/meta/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/meta/favicon-16x16.png"
				/>
				<link rel="manifest" href="/assets/meta/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/assets/meta/safari-pinned-tab.svg"
					color="#2AEDDD"
				/>
				<meta name="msapplication-TileColor" content="#00aba9" />
				<meta name="theme-color" content="#0a0e15" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Two Zero Nine Mastering | Audio Mastering in Liverpool"
				/>
				<meta property="og:url" content="https://www.twozeronine.co.uk" />
				<meta property="og:image" content="/assets/meta/opengraph.jpg" />
				<meta
					property="og:description"
					content="Mastering solutions for musicians, labels and studios around the world from our dedicated studio in Liverpool."
				/>
			</Head>
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
